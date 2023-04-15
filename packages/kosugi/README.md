# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Kosugi from "@electron-fonts/kosugi"

window.addEventListener("DOMContentLoaded", () => {
    Kosugi.inject()
})
```