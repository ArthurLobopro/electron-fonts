# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FrankRuhlLibre from "@electron-fonts/frank-ruhl-libre"

window.addEventListener("DOMContentLoaded", () => {
    FrankRuhlLibre.inject()
})
```