# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IMFellDWPica from "@electron-fonts/im-fell-dw-pica"

window.addEventListener("DOMContentLoaded", () => {
    IMFellDWPica.inject()
})
```