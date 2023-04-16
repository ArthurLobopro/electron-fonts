# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Romanesco from "@electron-fonts/romanesco"

window.addEventListener("DOMContentLoaded", () => {
    Romanesco.inject()
})
```