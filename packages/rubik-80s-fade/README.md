# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Rubik80sFade from "@electron-fonts/rubik-80s-fade"

window.addEventListener("DOMContentLoaded", () => {
    Rubik80sFade.inject()
})
```