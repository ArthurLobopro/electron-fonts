# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RammettoOne from "@electron-fonts/rammetto-one"

window.addEventListener("DOMContentLoaded", () => {
    RammettoOne.inject()
})
```