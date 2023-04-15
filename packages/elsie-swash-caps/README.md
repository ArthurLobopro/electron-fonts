# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ElsieSwashCaps from "@electron-fonts/elsie-swash-caps"

window.addEventListener("DOMContentLoaded", () => {
    ElsieSwashCaps.inject()
})
```