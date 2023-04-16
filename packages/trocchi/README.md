# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Trocchi from "@electron-fonts/trocchi"

window.addEventListener("DOMContentLoaded", () => {
    Trocchi.inject()
})
```