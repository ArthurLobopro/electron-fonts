# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Cousine from "@electron-fonts/cousine"

window.addEventListener("DOMContentLoaded", () => {
    Cousine.inject()
})
```