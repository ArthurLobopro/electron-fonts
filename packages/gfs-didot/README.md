# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GFSDidot from "@electron-fonts/gfs-didot"

window.addEventListener("DOMContentLoaded", () => {
    GFSDidot.inject()
})
```