# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PrincessSofia from "@electron-fonts/princess-sofia"

window.addEventListener("DOMContentLoaded", () => {
    PrincessSofia.inject()
})
```