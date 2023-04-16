# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import OleoScriptSwashCaps from "@electron-fonts/oleo-script-swash-caps"

window.addEventListener("DOMContentLoaded", () => {
    OleoScriptSwashCaps.inject()
})
```