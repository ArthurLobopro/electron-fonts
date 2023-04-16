# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TiroKannada from "@electron-fonts/tiro-kannada"

window.addEventListener("DOMContentLoaded", () => {
    TiroKannada.inject()
})
```