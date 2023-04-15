# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Jomhuria from "@electron-fonts/jomhuria"

window.addEventListener("DOMContentLoaded", () => {
    Jomhuria.inject()
})
```