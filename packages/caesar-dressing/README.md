# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CaesarDressing from "@electron-fonts/caesar-dressing"

window.addEventListener("DOMContentLoaded", () => {
    CaesarDressing.inject()
})
```