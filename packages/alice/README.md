# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Alice from "@electron-fonts/alice"

window.addEventListener("DOMContentLoaded", () => {
    Alice.inject()
})
```