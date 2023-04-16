# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import VT323 from "@electron-fonts/vt323"

window.addEventListener("DOMContentLoaded", () => {
    VT323.inject()
})
```