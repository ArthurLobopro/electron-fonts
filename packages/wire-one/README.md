# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import WireOne from "@electron-fonts/wire-one"

window.addEventListener("DOMContentLoaded", () => {
    WireOne.inject()
})
```