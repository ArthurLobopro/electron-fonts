# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AlbertSans from "@electron-fonts/albert-sans"

window.addEventListener("DOMContentLoaded", () => {
    AlbertSans.inject()
})
```