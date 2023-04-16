# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Sarina from "@electron-fonts/sarina"

window.addEventListener("DOMContentLoaded", () => {
    Sarina.inject()
})
```