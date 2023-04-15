# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BalooDa2 from "@electron-fonts/baloo-da-2"

window.addEventListener("DOMContentLoaded", () => {
    BalooDa2.inject()
})
```