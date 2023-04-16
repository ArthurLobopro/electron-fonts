# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Palanquin from "@electron-fonts/palanquin"

window.addEventListener("DOMContentLoaded", () => {
    Palanquin.inject()
})
```