# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PirataOne from "@electron-fonts/pirata-one"

window.addEventListener("DOMContentLoaded", () => {
    PirataOne.inject()
})
```