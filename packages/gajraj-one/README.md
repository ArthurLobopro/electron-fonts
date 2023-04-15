# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GajrajOne from "@electron-fonts/gajraj-one"

window.addEventListener("DOMContentLoaded", () => {
    GajrajOne.inject()
})
```