# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PTMono from "@electron-fonts/pt-mono"

window.addEventListener("DOMContentLoaded", () => {
    PTMono.inject()
})
```