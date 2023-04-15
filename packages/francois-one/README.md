# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FrancoisOne from "@electron-fonts/francois-one"

window.addEventListener("DOMContentLoaded", () => {
    FrancoisOne.inject()
})
```