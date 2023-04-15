# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LoveLight from "@electron-fonts/love-light"

window.addEventListener("DOMContentLoaded", () => {
    LoveLight.inject()
})
```