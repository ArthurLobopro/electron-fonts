# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DMMono from "@electron-fonts/dm-mono"

window.addEventListener("DOMContentLoaded", () => {
    DMMono.inject()
})
```