# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FleurDeLeah from "@electron-fonts/fleur-de-leah"

window.addEventListener("DOMContentLoaded", () => {
    FleurDeLeah.inject()
})
```