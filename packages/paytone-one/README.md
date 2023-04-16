# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PaytoneOne from "@electron-fonts/paytone-one"

window.addEventListener("DOMContentLoaded", () => {
    PaytoneOne.inject()
})
```