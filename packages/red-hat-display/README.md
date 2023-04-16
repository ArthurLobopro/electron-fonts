# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RedHatDisplay from "@electron-fonts/red-hat-display"

window.addEventListener("DOMContentLoaded", () => {
    RedHatDisplay.inject()
})
```