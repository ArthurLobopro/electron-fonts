# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Offside from "@electron-fonts/offside"

window.addEventListener("DOMContentLoaded", () => {
    Offside.inject()
})
```