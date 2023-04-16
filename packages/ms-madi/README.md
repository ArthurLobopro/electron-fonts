# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MsMadi from "@electron-fonts/ms-madi"

window.addEventListener("DOMContentLoaded", () => {
    MsMadi.inject()
})
```