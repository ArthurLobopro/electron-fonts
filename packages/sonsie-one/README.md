# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SonsieOne from "@electron-fonts/sonsie-one"

window.addEventListener("DOMContentLoaded", () => {
    SonsieOne.inject()
})
```