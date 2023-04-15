# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AveriaSansLibre from "@electron-fonts/averia-sans-libre"

window.addEventListener("DOMContentLoaded", () => {
    AveriaSansLibre.inject()
})
```