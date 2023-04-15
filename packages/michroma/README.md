# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Michroma from "@electron-fonts/michroma"

window.addEventListener("DOMContentLoaded", () => {
    Michroma.inject()
})
```