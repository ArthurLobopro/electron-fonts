# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import JuliusSansOne from "@electron-fonts/julius-sans-one"

window.addEventListener("DOMContentLoaded", () => {
    JuliusSansOne.inject()
})
```