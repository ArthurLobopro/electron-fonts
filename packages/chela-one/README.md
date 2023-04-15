# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ChelaOne from "@electron-fonts/chela-one"

window.addEventListener("DOMContentLoaded", () => {
    ChelaOne.inject()
})
```