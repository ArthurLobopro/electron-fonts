# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Kristi from "@electron-fonts/kristi"

window.addEventListener("DOMContentLoaded", () => {
    Kristi.inject()
})
```