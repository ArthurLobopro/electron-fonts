# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GFSNeohellenic from "@electron-fonts/gfs-neohellenic"

window.addEventListener("DOMContentLoaded", () => {
    GFSNeohellenic.inject()
})
```