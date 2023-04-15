# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Mingzat from "@electron-fonts/mingzat"

window.addEventListener("DOMContentLoaded", () => {
    Mingzat.inject()
})
```