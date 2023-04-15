# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Gluten from "@electron-fonts/gluten"

window.addEventListener("DOMContentLoaded", () => {
    Gluten.inject()
})
```