---
title: Scaling Rails screencasts
tags: rails
cache_breaker: 1
---

So I just checked out the [5th part](http://railslab.newrelic.com/2009/02/05/episode-5-advanced-page-caching) of Gregg Pollack's [Scaling Rails screencasts](http://railslab.newrelic.com/scaling-rails), skipping straight to that part because my curiosity was piqued on seeing it labelled as containing his "first rant of the series".

First up, he shows one way how you can make page caching work with pagination. So far so good.

Next up, he shows how you can include dynamic content on a statically cached paged. This is where he goes off the rails. His recommendation is that you use an AJAX callback to pull down the dynamic data. So let me get this straight: you're caching the page to avoid hitting the Rails stack, but then you do a request that does exactly that (hits the Rails stack) to fill in the dynamic content...

My own solution to the problem he uses in his example (showing a log in or log out link depending on who's visiting the page) is to use exclusively client-side JavaScript. Basically, if the user is logged in he/she will have a cookie set, so the browser can check for that cookie and show the "log out" link in that case, and otherwise show a "log in" link. This degrades gracefully, because when JavaScript isn't enabled a combined "log in/log out" link is shown instead.

In any case, he goes on to argue that you don't need "log out" and "log in" links at all, and that a single "My account" link should do the trick no matter who the visitor is. I think he's right in part, but I for one really appreciate the visual feedback that shows me whether I'm logged in or not; and given that implementing it is basically zero-cost using the method I've just described, I don't see any reason why not to.