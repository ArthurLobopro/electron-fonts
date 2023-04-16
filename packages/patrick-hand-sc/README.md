# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PatrickHandSC from "@electron-fonts/patrick-hand-sc"

window.addEventListener("DOMContentLoaded", () => {
    PatrickHandSC.inject()
})
```