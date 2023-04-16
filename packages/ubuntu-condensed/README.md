# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import UbuntuCondensed from "@electron-fonts/ubuntu-condensed"

window.addEventListener("DOMContentLoaded", () => {
    UbuntuCondensed.inject()
})
```