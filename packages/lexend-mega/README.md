# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LexendMega from "@electron-fonts/lexend-mega"

window.addEventListener("DOMContentLoaded", () => {
    LexendMega.inject()
})
```