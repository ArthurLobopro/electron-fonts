# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CarterOne from "@electron-fonts/carter-one"

window.addEventListener("DOMContentLoaded", () => {
    CarterOne.inject()
})
```