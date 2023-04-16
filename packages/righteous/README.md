# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Righteous from "@electron-fonts/righteous"

window.addEventListener("DOMContentLoaded", () => {
    Righteous.inject()
})
```