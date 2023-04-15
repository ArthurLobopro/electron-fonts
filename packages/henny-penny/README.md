# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import HennyPenny from "@electron-fonts/henny-penny"

window.addEventListener("DOMContentLoaded", () => {
    HennyPenny.inject()
})
```