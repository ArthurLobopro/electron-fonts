# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import OvertheRainbow from "@electron-fonts/over-the-rainbow"

window.addEventListener("DOMContentLoaded", () => {
    OvertheRainbow.inject()
})
```