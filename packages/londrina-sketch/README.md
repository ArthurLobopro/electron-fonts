# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LondrinaSketch from "@electron-fonts/londrina-sketch"

window.addEventListener("DOMContentLoaded", () => {
    LondrinaSketch.inject()
})
```