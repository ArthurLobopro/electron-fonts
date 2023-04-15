# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Corben from "@electron-fonts/corben"

window.addEventListener("DOMContentLoaded", () => {
    Corben.inject()
})
```