# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MySoul from "@electron-fonts/my-soul"

window.addEventListener("DOMContentLoaded", () => {
    MySoul.inject()
})
```