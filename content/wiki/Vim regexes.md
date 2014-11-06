---
tags: vim
cache_breaker: 1
---

# Gotchas

-   `*` is special when not escaped but...
-   `+` is special when escaped
-   `\{x,y}` (escaping only the opening bracket) works but...
-   You have to use `\( \)` (escape both parens)
-   `[]` is special when both are unescaped

# Pro-Tips

-   `\v`: everything is special unless escaped ("very magic")
-   `\V`: turn off very-magic
-   You can use (somewhat) arbitrary delimiters, like `@`, instead of `/`
-   `\_`: match anything, including newlines (cf: `.`)
-   `\zs`: match but don't capture; useful for partial substitutions:
    -   `:%s/foo\zsbar/baz/g` will change "foobar" to "foobaz"
    -   `:%s/\v^(foobar)(baz)/\1/` (same with explicit capturing and restoration)
    -   `:%s/\v(^foobar)@<=baz//` (same with zero-width look-behind assertion)
-   `\=`: evaluate an expression on right side of regex; eg: `:%s/\v(\S+)/\=expand(submatch(1))/g` (turns `~/foo` into full path)

# Making Vim regexen more sane

Always be "very magic" with this in your `~/.vimrc`:

    nnoremap / /\v
    vnoremap / /\v

# Using Ruby to do heavy lifting instead

`:rubydo` can be used to transform lines; eg:

    :rubydo $_ = $_.split(' ').reverse.join(' <- ')

# Source

-   <http://briancarper.net/blog/176/vim-regexes> (nice list of regex inconsistencies)
-   <http://briancarper.net/blog/448/vim-regexes-are-awesome> (list of regex Pro-Tips)
