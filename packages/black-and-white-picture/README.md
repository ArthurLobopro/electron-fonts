# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BlackAndWhitePicture from "@electron-fonts/black-and-white-picture"

window.addEventListener("DOMContentLoaded", () => {
    BlackAndWhitePicture.inject()
})
```