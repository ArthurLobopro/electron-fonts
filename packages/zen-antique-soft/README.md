# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZenAntiqueSoft from "@electron-fonts/zen-antique-soft"

window.addEventListener("DOMContentLoaded", () => {
    ZenAntiqueSoft.inject()
})
```