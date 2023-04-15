# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AlegreyaSansSC from "@electron-fonts/alegreya-sans-sc"

window.addEventListener("DOMContentLoaded", () => {
    AlegreyaSansSC.inject()
})
```