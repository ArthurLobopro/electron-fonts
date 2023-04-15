# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import HomemadeApple from "@electron-fonts/homemade-apple"

window.addEventListener("DOMContentLoaded", () => {
    HomemadeApple.inject()
})
```