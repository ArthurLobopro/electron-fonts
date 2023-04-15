# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Eczar from "@electron-fonts/eczar"

window.addEventListener("DOMContentLoaded", () => {
    Eczar.inject()
})
```