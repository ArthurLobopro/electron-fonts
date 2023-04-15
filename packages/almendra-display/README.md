# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AlmendraDisplay from "@electron-fonts/almendra-display"

window.addEventListener("DOMContentLoaded", () => {
    AlmendraDisplay.inject()
})
```