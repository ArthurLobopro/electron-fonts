# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MartelSans from "@electron-fonts/martel-sans"

window.addEventListener("DOMContentLoaded", () => {
    MartelSans.inject()
})
```