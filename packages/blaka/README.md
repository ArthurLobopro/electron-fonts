# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Blaka from "@electron-fonts/blaka"

window.addEventListener("DOMContentLoaded", () => {
    Blaka.inject()
})
```