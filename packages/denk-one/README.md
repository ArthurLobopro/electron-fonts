# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DenkOne from "@electron-fonts/denk-one"

window.addEventListener("DOMContentLoaded", () => {
    DenkOne.inject()
})
```