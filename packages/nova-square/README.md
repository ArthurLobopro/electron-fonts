# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NovaSquare from "@electron-fonts/nova-square"

window.addEventListener("DOMContentLoaded", () => {
    NovaSquare.inject()
})
```