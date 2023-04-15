# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AbhayaLibre from "@electron-fonts/abhaya-libre"

window.addEventListener("DOMContentLoaded", () => {
    AbhayaLibre.inject()
})
```