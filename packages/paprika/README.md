# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Paprika from "@electron-fonts/paprika"

window.addEventListener("DOMContentLoaded", () => {
    Paprika.inject()
})
```