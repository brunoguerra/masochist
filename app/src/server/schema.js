import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import {
  connectionArgs,
  connectionFromArraySlice,
  connectionFromPromisedArraySlice,
  getOffsetWithDefault,
} from 'graphql-relay';

import {nodeField} from './schema/definitions/node';
import Article from './models/Article';
import Post from './models/Post';
import Snippet from './models/Snippet';
import Tag from './models/Tag';
import articleConnection from './schema/fields/connections/articleConnection';
import postConnection from './schema/fields/connections/postConnection';
import searchConnection from './schema/fields/connections/searchConnection';
import snippetConnection from './schema/fields/connections/snippetConnection';
import tagConnection from './schema/fields/connections/tagConnection';
import search from './search';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    fields: {
      node: nodeField,
      articles: {
        type: articleConnection,
        description: 'Wiki articles visible to this user',
        args: connectionArgs,
        resolve: async (user, args, context, {rootValue}) => {
          // TODO: At the moment we're ignoring use of last/before; should we do something about it?
          // Cap count to avoid abuse.
          const count = Math.max(args.first, 10);
          const offset = getOffsetWithDefault(args.after, -1) + 1;
          const [articles, totalCount] = await Article.readIndex(count, offset);
          return connectionFromPromisedArraySlice(
            rootValue.loaders.Article.loadMany(articles),
            args,
            {
              sliceStart: offset,
              arrayLength: totalCount,
            },
          );
        },
      },
      posts: {
        type: postConnection,
        description: 'Blog posts visible to this user',
        args: connectionArgs,
        resolve: async (user, args, context, {rootValue}) => {
          // Cap count to avoid abuse.
          const count = Math.max(args.first, 10);
          const offset = getOffsetWithDefault(args.after, -1) + 1;
          const [posts, totalCount] = await Post.readIndex(count, offset);
          return connectionFromPromisedArraySlice(
            rootValue.loaders.Post.loadMany(posts),
            args,
            {
              sliceStart: offset,
              arrayLength: totalCount,
            },
          );
        },
      },
      snippets: {
        type: snippetConnection,
        description: 'Snippets visible to this user',
        args: connectionArgs,
        resolve: async (user, args, context, {rootValue}) => {
          // Cap count to avoid abuse.
          const count = Math.max(args.first, 10);
          const offset = getOffsetWithDefault(args.after, -1) + 1;
          const [snippets, totalCount] = await Snippet.readIndex(count, offset);
          return connectionFromPromisedArraySlice(
            rootValue.loaders.Snippet.loadMany(snippets),
            args,
            {
              sliceStart: offset,
              arrayLength: totalCount,
            },
          );
        },
      },
      tags: {
        type: tagConnection,
        description: 'Tags visible to this user',
        args: connectionArgs,
        resolve: async (user, args, context, {rootValue}) => {
          // Cap count to avoid abuse.
          const count = Math.max(args.first, 10);
          const offset = getOffsetWithDefault(args.after, -1) + 1;
          const [tags, totalCount] = await Tag.readIndex(count, offset);
          return {
            count: totalCount,
            ...connectionFromArraySlice(
              tags,
              args,
              {
                sliceStart: offset,
                arrayLength: totalCount,
              },
            ),
          };
        },
      },
      search: {
        type: searchConnection,
        description: 'Search results visible to this user',
        args: {
          ...connectionArgs,
          q: {
            type: GraphQLString,
            description: 'One or more search terms, separated by spaces',
          },
        },
        resolve: async (user, args, context, {rootValue}) => {
          // Cap count to avoid abuse.
          const count = Math.max(args.first, 10);
          const offset = getOffsetWithDefault(args.after, -1) + 1;
          const results = await search(args.q);
          const {loaders} = rootValue;
          const promisedContent = results
            .slice(offset, offset + count)
            .map(({type, id}) => {
              switch (type) {
                case 'wiki':
                  return loaders.Article.load(id);
                case 'blog':
                  return loaders.Post.load(id);
                case 'pages':
                  return loaders.Page.load(id);
                case 'snippets':
                  return loaders.Snippet.load(id);
                default:
                  // TODO throw here?
              }
            });
          return connectionFromPromisedArraySlice(
            Promise.all(promisedContent),
            args,
            {
              sliceStart: offset,
              arrayLength: results.length,
            },
          ).then(connection => ({
            count: results.length,
            ...connection,
          }));
        },
      },
    }
  })
});
