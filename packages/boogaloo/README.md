# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Boogaloo from "@electron-fonts/boogaloo"

window.addEventListener("DOMContentLoaded", () => {
    Boogaloo.inject()
})
```