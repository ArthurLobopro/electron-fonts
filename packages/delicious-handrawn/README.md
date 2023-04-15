# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DeliciousHandrawn from "@electron-fonts/delicious-handrawn"

window.addEventListener("DOMContentLoaded", () => {
    DeliciousHandrawn.inject()
})
```