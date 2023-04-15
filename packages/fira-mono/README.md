# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FiraMono from "@electron-fonts/fira-mono"

window.addEventListener("DOMContentLoaded", () => {
    FiraMono.inject()
})
```