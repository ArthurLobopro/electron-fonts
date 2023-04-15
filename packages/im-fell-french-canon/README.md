# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IMFellFrenchCanon from "@electron-fonts/im-fell-french-canon"

window.addEventListener("DOMContentLoaded", () => {
    IMFellFrenchCanon.inject()
})
```