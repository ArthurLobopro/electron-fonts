# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ChangaOne from "@electron-fonts/changa-one"

window.addEventListener("DOMContentLoaded", () => {
    ChangaOne.inject()
})
```