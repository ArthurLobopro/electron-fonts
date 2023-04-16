# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ShadowsIntoLightTwo from "@electron-fonts/shadows-into-light-two"

window.addEventListener("DOMContentLoaded", () => {
    ShadowsIntoLightTwo.inject()
})
```