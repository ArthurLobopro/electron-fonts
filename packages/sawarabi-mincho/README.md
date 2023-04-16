# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SawarabiMincho from "@electron-fonts/sawarabi-mincho"

window.addEventListener("DOMContentLoaded", () => {
    SawarabiMincho.inject()
})
```