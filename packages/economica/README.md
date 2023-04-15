# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Economica from "@electron-fonts/economica"

window.addEventListener("DOMContentLoaded", () => {
    Economica.inject()
})
```