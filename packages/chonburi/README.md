# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Chonburi from "@electron-fonts/chonburi"

window.addEventListener("DOMContentLoaded", () => {
    Chonburi.inject()
})
```