# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BlakaInk from "@electron-fonts/blaka-ink"

window.addEventListener("DOMContentLoaded", () => {
    BlakaInk.inject()
})
```