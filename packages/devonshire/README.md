# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Devonshire from "@electron-fonts/devonshire"

window.addEventListener("DOMContentLoaded", () => {
    Devonshire.inject()
})
```