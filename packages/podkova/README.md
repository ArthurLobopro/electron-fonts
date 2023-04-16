# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Podkova from "@electron-fonts/podkova"

window.addEventListener("DOMContentLoaded", () => {
    Podkova.inject()
})
```