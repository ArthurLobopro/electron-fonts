# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Combo from "@electron-fonts/combo"

window.addEventListener("DOMContentLoaded", () => {
    Combo.inject()
})
```