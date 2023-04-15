# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Copse from "@electron-fonts/copse"

window.addEventListener("DOMContentLoaded", () => {
    Copse.inject()
})
```