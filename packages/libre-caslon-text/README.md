# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LibreCaslonText from "@electron-fonts/libre-caslon-text"

window.addEventListener("DOMContentLoaded", () => {
    LibreCaslonText.inject()
})
```