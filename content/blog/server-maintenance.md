---
title: Server maintenance
tags: site
cache_breaker: 1
---

The server will be going down for minor maintenance at approximately 12:20 PM EDT today (Sunday 28 September 2008). Service should be interrupted only for a couple minutes while the server is rebooting.

**Update:** \[50 minutes later\] The server is now back up. Although the initial phase of the reboot went as quickly as expected (the usual 60 seconds), the system insisted on doing a forced `fsck` (File System Check) which ended up delaying things by about 30 minutes before the network interfaces and services came back online. For those of you who are interested in the technical details of the update process, and information about why such a long-running `fsck` might be triggered, see, "[Updating the kernel to version 2.6.18-92.1.13.el5 on Red Hat Enterprise Linux 5.1](/wiki/Updating_the_kernel_to_version_2.6.18-92.1.13.el5_on_Red_Hat_Enterprise_Linux_5.1)".

**Update 2:** \[6 hours later\] It has come to my attention that email services didn't come back up after booting due to a misconfiguration (not detected previously because this was actually the first reboot for this server, ever); this has now been fixed. If you've tried to contact me you may have seen temporary delivery failures during the intervening period, but most likely your mail transfer agent will retry automatically for you without any intervention on your part.