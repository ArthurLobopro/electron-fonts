# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Underdog from "@electron-fonts/underdog"

window.addEventListener("DOMContentLoaded", () => {
    Underdog.inject()
})
```