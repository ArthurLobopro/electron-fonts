# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SmoochSans from "@electron-fonts/smooch-sans"

window.addEventListener("DOMContentLoaded", () => {
    SmoochSans.inject()
})
```