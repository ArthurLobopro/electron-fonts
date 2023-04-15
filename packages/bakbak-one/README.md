# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BakbakOne from "@electron-fonts/bakbak-one"

window.addEventListener("DOMContentLoaded", () => {
    BakbakOne.inject()
})
```