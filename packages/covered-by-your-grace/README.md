# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CoveredByYourGrace from "@electron-fonts/covered-by-your-grace"

window.addEventListener("DOMContentLoaded", () => {
    CoveredByYourGrace.inject()
})
```