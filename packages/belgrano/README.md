# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Belgrano from "@electron-fonts/belgrano"

window.addEventListener("DOMContentLoaded", () => {
    Belgrano.inject()
})
```