# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Butcherman from "@electron-fonts/butcherman"

window.addEventListener("DOMContentLoaded", () => {
    Butcherman.inject()
})
```