# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RalewayDots from "@electron-fonts/raleway-dots"

window.addEventListener("DOMContentLoaded", () => {
    RalewayDots.inject()
})
```