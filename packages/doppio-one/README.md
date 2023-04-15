# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DoppioOne from "@electron-fonts/doppio-one"

window.addEventListener("DOMContentLoaded", () => {
    DoppioOne.inject()
})
```