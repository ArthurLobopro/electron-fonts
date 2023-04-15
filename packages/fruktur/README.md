# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Fruktur from "@electron-fonts/fruktur"

window.addEventListener("DOMContentLoaded", () => {
    Fruktur.inject()
})
```