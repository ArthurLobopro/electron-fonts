# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Waterfall from "@electron-fonts/waterfall"

window.addEventListener("DOMContentLoaded", () => {
    Waterfall.inject()
})
```