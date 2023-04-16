# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansMayanNumerals from "@electron-fonts/noto-sans-mayan-numerals"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansMayanNumerals.inject()
})
```