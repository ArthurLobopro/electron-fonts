# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ScheherazadeNew from "@electron-fonts/scheherazade-new"

window.addEventListener("DOMContentLoaded", () => {
    ScheherazadeNew.inject()
})
```