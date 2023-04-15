# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AutourOne from "@electron-fonts/autour-one"

window.addEventListener("DOMContentLoaded", () => {
    AutourOne.inject()
})
```