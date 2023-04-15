# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IMFellFrenchCanonSC from "@electron-fonts/im-fell-french-canon-sc"

window.addEventListener("DOMContentLoaded", () => {
    IMFellFrenchCanonSC.inject()
})
```