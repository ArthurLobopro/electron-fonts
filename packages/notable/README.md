# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Notable from "@electron-fonts/notable"

window.addEventListener("DOMContentLoaded", () => {
    Notable.inject()
})
```