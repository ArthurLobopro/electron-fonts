# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Baloo2 from "@electron-fonts/baloo-2"

window.addEventListener("DOMContentLoaded", () => {
    Baloo2.inject()
})
```