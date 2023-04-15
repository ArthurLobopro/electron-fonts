# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Dangrek from "@electron-fonts/dangrek"

window.addEventListener("DOMContentLoaded", () => {
    Dangrek.inject()
})
```