# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CutiveMono from "@electron-fonts/cutive-mono"

window.addEventListener("DOMContentLoaded", () => {
    CutiveMono.inject()
})
```