# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AlexBrush from "@electron-fonts/alex-brush"

window.addEventListener("DOMContentLoaded", () => {
    AlexBrush.inject()
})
```