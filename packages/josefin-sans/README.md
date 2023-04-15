# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import JosefinSans from "@electron-fonts/josefin-sans"

window.addEventListener("DOMContentLoaded", () => {
    JosefinSans.inject()
})
```