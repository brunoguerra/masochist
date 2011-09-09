---
tags: rspec
cache_breaker: 1
---

Seeing as the [official release notes are mangled](http://rubyforge.org/frs/shownotes.php?release_id=26546), here's a version I cleaned up by hand:

    === Version 1.1.5

    IMPORTANT: use the new 'autospec' command instead of 'autotest'. We changed
    the way autotest discovers rspec so the autotest executable won't
    automatically load rspec anymore. This allows rspec to live side by side other
    spec frameworks without always co-opting autotest through autotest's discovery
    mechanism.

    ALSO IMPORTANT: $rspec_options is gone. If you were using this for anything
    (like your own runners), use Spec::Runner.options instead.

    ADDITIONALLY IMPORTANT: If you have any custom formatters, you'll need to
    modify #example_pending to accept three arguments instead of just two. See the
    rdoc for Spec::Runner::Formatter::BaseFormatter#example_pending for more
    information.

    * Consider MinGW as valid RUBY_PLATFORM for --colour option. (patch from Luis Lavena). Closes #406.
    * Added additional characters to be escaped in step strings (patch from Jake Cahoon). Closes #417.
    * Disable color codes on STDOUT when STDOUT.tty? is false (patch from Tim Pope). Closes #413.
    * mock(:null_object=>true) plays nice with HTML (patch from Gerrit Kaiser). Closes #230.
    * a step definition with no block is treated as pending
    * make sure consolidate_failures only grabs _spec files. Closes #369
    * Simplifying ExampleGroupMethods#registration_backtrace. (From Wilson Bilkovich - http://metaclass.org/2008/6/7/calling-in-the-dark)
    * Use 127.0.0.1 instead of localhost for drb (thanks Ola Bini)
    * html story formatter correctly colors story/scenario red if step fails (Patch from Joseph Wilk). Closes #300
    * plain text story formatter correctly colors story/scenario red if step fails (Patch from Joseph Wilk). Closes #439
    * quiet deprecation warning on inflector - patch from RSL. Closes #430
    * added autospec executable
    * added configurable messages to simple_matcher
    * should and should_not return true on success
    * use hoe for build/release
    * bye, bye translator
    * autotest/rspec uses ruby command instead of spec command (no need for spec command unless loading directories)
    * Avoid 'invalid option -O' in autotest (patch from Jonathan del Strother). Closes #486.
    * Fix: Unimplemented step with new line throws error (patch from Ben Mabey). Closes #494.
    * Only use color codes on tty; override for autospec (patch from Tim Pope). Closes #413.
    * Warn when setting mock expectations on nil (patch from Ben Mabey). Closes #521.
    * Support argument constraints as values in the hash_including contstraint. Thanks to Pirkka Hartikainen for failing code examples and the fix. Buttons up #501.
    * mock(:null_object=>true) plays nice with HTML (patch from Gerrit Kaiser)
    * Consider MinGW as valid RUBY_PLATFORM for --colour option. (patch from Luis Lavena). Closes #406.
    * Add 2nd arg to respond_to? to align w/ core Ruby rdoc: http://www.ruby-doc.org/core/classes/Object.html#M000604
    * quiet backtrace tweaker filters individual lines out of multiline (ala Rails) error messages (Pat Maddox)
    * added ability to stub multiple methods in one stub! call (Pat Maddox)
    * story progress bar formatter and more colourful summaries from the plain text story formatter (Joseph Wilk)
    * Avoid ruby invocation errors when autotesting (Jonathan del Strother)
    * added mock('foo').as_null_object
    * add file and line number to pending_example for formatters (Scott Taylor)
    * return last stubbed value for mock expectation with no explicit return (Pat Maddox)
    * Fixed bug when should_receive(:foo).any_number_of_times is called after similar stub (Pat Maddox)
    * Warning messages now issued when expectations are set on nil (Ben Mabey)