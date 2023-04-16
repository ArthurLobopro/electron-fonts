# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RozhaOne from "@electron-fonts/rozha-one"

window.addEventListener("DOMContentLoaded", () => {
    RozhaOne.inject()
})
```