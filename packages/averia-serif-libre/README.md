# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AveriaSerifLibre from "@electron-fonts/averia-serif-libre"

window.addEventListener("DOMContentLoaded", () => {
    AveriaSerifLibre.inject()
})
```