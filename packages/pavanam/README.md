# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Pavanam from "@electron-fonts/pavanam"

window.addEventListener("DOMContentLoaded", () => {
    Pavanam.inject()
})
```