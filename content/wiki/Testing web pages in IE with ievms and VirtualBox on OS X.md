---
tags: virtualbox ievms
---

1.  [Grab](https://www.virtualbox.org/wiki/Downloads) [VirtualBox](/wiki/VirtualBox) (free, [open source](/wiki/open_source))
2.  Use [ievms](/wiki/ievms) (free, [open source](/wiki/open_source)) to set up a bunch of throwaway Windows XP/Windows 7 VMs with version of IE ranging from 6 through 11 (at the time of writing):
    -   Info: <http://xdissent.github.io/ievms/>
    -   Repo: <https://github.com/xdissent/ievms>

This will take up a huge amount of space; you can recover some of it after install with:

```shell
$ find ~/.ievms -type f ! -name "*.vmdk" -exec rm {} \;
```

The VMs you create will be able to access the network, or apps running on the host machine; you can access the latter on `10.0.2.2` (ie. the default gateway reported by `ipconfig` in the Windows command prompt).

# See also

-   Old (but good) summary of different ways to test in IE: <http://coding.smashingmagazine.com/2011/09/02/reliable-cross-browser-testing-part-1-internet-explorer/>
