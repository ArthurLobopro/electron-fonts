# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import InstrumentSerif from "@electron-fonts/instrument-serif"

window.addEventListener("DOMContentLoaded", () => {
    InstrumentSerif.inject()
})
```