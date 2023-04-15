# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Joan from "@electron-fonts/joan"

window.addEventListener("DOMContentLoaded", () => {
    Joan.inject()
})
```