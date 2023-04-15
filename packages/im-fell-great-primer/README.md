# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IMFellGreatPrimer from "@electron-fonts/im-fell-great-primer"

window.addEventListener("DOMContentLoaded", () => {
    IMFellGreatPrimer.inject()
})
```