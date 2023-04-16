# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Shalimar from "@electron-fonts/shalimar"

window.addEventListener("DOMContentLoaded", () => {
    Shalimar.inject()
})
```