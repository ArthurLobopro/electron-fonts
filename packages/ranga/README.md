# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Ranga from "@electron-fonts/ranga"

window.addEventListener("DOMContentLoaded", () => {
    Ranga.inject()
})
```