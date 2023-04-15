# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EricaOne from "@electron-fonts/erica-one"

window.addEventListener("DOMContentLoaded", () => {
    EricaOne.inject()
})
```