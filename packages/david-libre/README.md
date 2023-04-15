# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DavidLibre from "@electron-fonts/david-libre"

window.addEventListener("DOMContentLoaded", () => {
    DavidLibre.inject()
})
```