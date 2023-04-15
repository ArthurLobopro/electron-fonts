# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Lekton from "@electron-fonts/lekton"

window.addEventListener("DOMContentLoaded", () => {
    Lekton.inject()
})
```