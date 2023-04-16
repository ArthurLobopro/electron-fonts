# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Ramaraja from "@electron-fonts/ramaraja"

window.addEventListener("DOMContentLoaded", () => {
    Ramaraja.inject()
})
```