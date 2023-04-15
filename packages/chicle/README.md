# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Chicle from "@electron-fonts/chicle"

window.addEventListener("DOMContentLoaded", () => {
    Chicle.inject()
})
```