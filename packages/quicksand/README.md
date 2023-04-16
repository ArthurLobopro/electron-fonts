# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Quicksand from "@electron-fonts/quicksand"

window.addEventListener("DOMContentLoaded", () => {
    Quicksand.inject()
})
```