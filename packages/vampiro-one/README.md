# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import VampiroOne from "@electron-fonts/vampiro-one"

window.addEventListener("DOMContentLoaded", () => {
    VampiroOne.inject()
})
```