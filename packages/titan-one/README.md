# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TitanOne from "@electron-fonts/titan-one"

window.addEventListener("DOMContentLoaded", () => {
    TitanOne.inject()
})
```