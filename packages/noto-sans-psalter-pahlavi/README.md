# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansPsalterPahlavi from "@electron-fonts/noto-sans-psalter-pahlavi"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansPsalterPahlavi.inject()
})
```