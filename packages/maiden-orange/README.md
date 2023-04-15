# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MaidenOrange from "@electron-fonts/maiden-orange"

window.addEventListener("DOMContentLoaded", () => {
    MaidenOrange.inject()
})
```