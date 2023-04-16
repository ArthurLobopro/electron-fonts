# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Tinos from "@electron-fonts/tinos"

window.addEventListener("DOMContentLoaded", () => {
    Tinos.inject()
})
```