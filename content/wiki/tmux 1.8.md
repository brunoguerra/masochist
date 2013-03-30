---
tags: tmux
---

This release has some really nice new features, like `copy-pipe` (great for integration with [Clipper](/wiki/Clipper)) and pane "zooming".

The focus reporting [looks useful](http://www.mail-archive.com/tmux-users@lists.sourceforge.net/msg03941.html) as well; ideally it could be wired up to make the [Vim](/wiki/Vim) `'autoread'` option work like it does under GUI Vim.

    CHANGES FROM 1.7 to 1.8, 26 March 2013

    Incompatible Changes
    ====================

    * layout redo/undo has been removed.

    Normal Changes
    ==============

    * Add halfpage up/down bindings to copy mode.
    * Session choosing fixed to work with unattached sessions.
    * New window options window-status-last-{attr,bg,fg} to denote the last
      window which was active.
    * Scrolling in copy-mode now scrolls the region without moving the mouse
      cursor.
    * run-shell learnt '-t' to specify the pane to use when displaying output.
    * Support for middle-click pasting.
    * choose-tree learns '-u' to start uncollapsed.
    * select-window learnt '-T' to toggle to the last window if it's already
      current.
    * New session option 'assume-paste-time' for pasting text versus key-binding
      actions.
    * choose-* commands now work outside of an attached client.
    * Aliases are now shown for list-commands command.
    * Status learns about formats.
    * Free-form options can be set with set-option if prepended with an '@'
      sign.
    * capture-pane learnt '-p' to send to stdout, and '-e' for capturing escape
      sequences, and '-a' to capture the alternate screen, and '-P' to dump
      pending output.
    * Many new formats added (client_session, client_last_session, etc.)
    * Control mode, which is a way for a client to send tmux commands.
      Currently more useful to users of iterm2.
    * resize-pane learnt '-x' and '-y' for absolute pane sizing.
    * Config file loading now reports errors from all files which are loaded via
      the 'source-file' command.
    * 'copy-pipe' mode command to copy selection and pipe the selection to a
      command.
    * Panes can now emit focus notifications for certain applications
      which use those.
    * run-shell and if-shell now accept formats.
    * resize-pane learnt '-Z' for zooming a pane temporarily.
    * new-session learnt '-A' to make it behave like attach-session.
    * set-option learnt '-o' to prevent setting an option which is already set.
    * capture-pane and show-options learns '-q' to silence errors.
    * New command 'wait-for' which blocks a client until woken up again.
    * Resizing panes will now reflow the text inside them.
    * Lots and lots of bug fixes, fixing memory-leaks, etc.
    * Various manpage improvements.

Source: <http://sourceforge.net/p/tmux/tmux-code/ci/master/tree/CHANGES>