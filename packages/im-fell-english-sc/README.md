# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IMFellEnglishSC from "@electron-fonts/im-fell-english-sc"

window.addEventListener("DOMContentLoaded", () => {
    IMFellEnglishSC.inject()
})
```