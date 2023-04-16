# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PurplePurse from "@electron-fonts/purple-purse"

window.addEventListener("DOMContentLoaded", () => {
    PurplePurse.inject()
})
```