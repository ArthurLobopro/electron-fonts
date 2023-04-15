# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Gaegu from "@electron-fonts/gaegu"

window.addEventListener("DOMContentLoaded", () => {
    Gaegu.inject()
})
```