# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NovaMono from "@electron-fonts/nova-mono"

window.addEventListener("DOMContentLoaded", () => {
    NovaMono.inject()
})
```