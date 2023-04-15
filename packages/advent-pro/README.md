# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AdventPro from "@electron-fonts/advent-pro"

window.addEventListener("DOMContentLoaded", () => {
    AdventPro.inject()
})
```