# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LibreCaslonDisplay from "@electron-fonts/libre-caslon-display"

window.addEventListener("DOMContentLoaded", () => {
    LibreCaslonDisplay.inject()
})
```