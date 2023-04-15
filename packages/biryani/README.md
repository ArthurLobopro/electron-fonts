# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Biryani from "@electron-fonts/biryani"

window.addEventListener("DOMContentLoaded", () => {
    Biryani.inject()
})
```