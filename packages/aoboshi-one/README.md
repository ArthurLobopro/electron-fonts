# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AoboshiOne from "@electron-fonts/aoboshi-one"

window.addEventListener("DOMContentLoaded", () => {
    AoboshiOne.inject()
})
```