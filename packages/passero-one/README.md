# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PasseroOne from "@electron-fonts/passero-one"

window.addEventListener("DOMContentLoaded", () => {
    PasseroOne.inject()
})
```