# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EmblemaOne from "@electron-fonts/emblema-one"

window.addEventListener("DOMContentLoaded", () => {
    EmblemaOne.inject()
})
```