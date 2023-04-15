# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BonaNova from "@electron-fonts/bona-nova"

window.addEventListener("DOMContentLoaded", () => {
    BonaNova.inject()
})
```