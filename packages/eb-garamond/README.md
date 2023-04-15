# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EBGaramond from "@electron-fonts/eb-garamond"

window.addEventListener("DOMContentLoaded", () => {
    EBGaramond.inject()
})
```