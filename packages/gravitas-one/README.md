# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GravitasOne from "@electron-fonts/gravitas-one"

window.addEventListener("DOMContentLoaded", () => {
    GravitasOne.inject()
})
```