# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CormorantGaramond from "@electron-fonts/cormorant-garamond"

window.addEventListener("DOMContentLoaded", () => {
    CormorantGaramond.inject()
})
```