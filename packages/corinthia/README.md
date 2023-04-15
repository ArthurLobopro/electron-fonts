# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Corinthia from "@electron-fonts/corinthia"

window.addEventListener("DOMContentLoaded", () => {
    Corinthia.inject()
})
```