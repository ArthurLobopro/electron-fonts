# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Dhurjati from "@electron-fonts/dhurjati"

window.addEventListener("DOMContentLoaded", () => {
    Dhurjati.inject()
})
```