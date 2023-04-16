# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import OxygenMono from "@electron-fonts/oxygen-mono"

window.addEventListener("DOMContentLoaded", () => {
    OxygenMono.inject()
})
```