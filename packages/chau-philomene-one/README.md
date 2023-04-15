# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ChauPhilomeneOne from "@electron-fonts/chau-philomene-one"

window.addEventListener("DOMContentLoaded", () => {
    ChauPhilomeneOne.inject()
})
```