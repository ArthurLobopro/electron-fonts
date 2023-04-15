# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Jaldi from "@electron-fonts/jaldi"

window.addEventListener("DOMContentLoaded", () => {
    Jaldi.inject()
})
```