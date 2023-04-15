# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Chathura from "@electron-fonts/chathura"

window.addEventListener("DOMContentLoaded", () => {
    Chathura.inject()
})
```