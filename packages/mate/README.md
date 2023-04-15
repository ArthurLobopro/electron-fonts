# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Mate from "@electron-fonts/mate"

window.addEventListener("DOMContentLoaded", () => {
    Mate.inject()
})
```