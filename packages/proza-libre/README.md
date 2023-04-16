# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ProzaLibre from "@electron-fonts/proza-libre"

window.addEventListener("DOMContentLoaded", () => {
    ProzaLibre.inject()
})
```