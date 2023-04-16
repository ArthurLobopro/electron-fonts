# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Sahitya from "@electron-fonts/sahitya"

window.addEventListener("DOMContentLoaded", () => {
    Sahitya.inject()
})
```