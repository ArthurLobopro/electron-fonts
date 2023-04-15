# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CuteFont from "@electron-fonts/cute-font"

window.addEventListener("DOMContentLoaded", () => {
    CuteFont.inject()
})
```