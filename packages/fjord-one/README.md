# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FjordOne from "@electron-fonts/fjord-one"

window.addEventListener("DOMContentLoaded", () => {
    FjordOne.inject()
})
```