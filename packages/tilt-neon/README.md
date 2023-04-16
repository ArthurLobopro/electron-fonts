# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TiltNeon from "@electron-fonts/tilt-neon"

window.addEventListener("DOMContentLoaded", () => {
    TiltNeon.inject()
})
```