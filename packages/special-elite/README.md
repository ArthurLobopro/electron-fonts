# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SpecialElite from "@electron-fonts/special-elite"

window.addEventListener("DOMContentLoaded", () => {
    SpecialElite.inject()
})
```