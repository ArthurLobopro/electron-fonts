# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ChivoMono from "@electron-fonts/chivo-mono"

window.addEventListener("DOMContentLoaded", () => {
    ChivoMono.inject()
})
```