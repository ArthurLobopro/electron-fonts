# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KolkerBrush from "@electron-fonts/kolker-brush"

window.addEventListener("DOMContentLoaded", () => {
    KolkerBrush.inject()
})
```