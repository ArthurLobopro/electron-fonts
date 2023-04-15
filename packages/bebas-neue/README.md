# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BebasNeue from "@electron-fonts/bebas-neue"

window.addEventListener("DOMContentLoaded", () => {
    BebasNeue.inject()
})
```