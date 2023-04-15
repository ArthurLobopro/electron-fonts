# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AveriaGruesaLibre from "@electron-fonts/averia-gruesa-libre"

window.addEventListener("DOMContentLoaded", () => {
    AveriaGruesaLibre.inject()
})
```