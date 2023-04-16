# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ProstoOne from "@electron-fonts/prosto-one"

window.addEventListener("DOMContentLoaded", () => {
    ProstoOne.inject()
})
```