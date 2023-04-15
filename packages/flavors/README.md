# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Flavors from "@electron-fonts/flavors"

window.addEventListener("DOMContentLoaded", () => {
    Flavors.inject()
})
```