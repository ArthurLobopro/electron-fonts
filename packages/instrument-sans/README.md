# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import InstrumentSans from "@electron-fonts/instrument-sans"

window.addEventListener("DOMContentLoaded", () => {
    InstrumentSans.inject()
})
```