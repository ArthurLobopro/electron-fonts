# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AlegreyaSans from "@electron-fonts/alegreya-sans"

window.addEventListener("DOMContentLoaded", () => {
    AlegreyaSans.inject()
})
```