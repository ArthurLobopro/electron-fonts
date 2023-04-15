# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IMFellDoublePica from "@electron-fonts/im-fell-double-pica"

window.addEventListener("DOMContentLoaded", () => {
    IMFellDoublePica.inject()
})
```