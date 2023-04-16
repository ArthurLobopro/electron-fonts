# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MrDeHaviland from "@electron-fonts/mr-de-haviland"

window.addEventListener("DOMContentLoaded", () => {
    MrDeHaviland.inject()
})
```