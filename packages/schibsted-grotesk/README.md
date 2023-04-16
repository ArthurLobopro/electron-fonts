# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SchibstedGrotesk from "@electron-fonts/schibsted-grotesk"

window.addEventListener("DOMContentLoaded", () => {
    SchibstedGrotesk.inject()
})
```