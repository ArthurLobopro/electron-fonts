# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SpaceGrotesk from "@electron-fonts/space-grotesk"

window.addEventListener("DOMContentLoaded", () => {
    SpaceGrotesk.inject()
})
```