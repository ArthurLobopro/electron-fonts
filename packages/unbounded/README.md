# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Unbounded from "@electron-fonts/unbounded"

window.addEventListener("DOMContentLoaded", () => {
    Unbounded.inject()
})
```