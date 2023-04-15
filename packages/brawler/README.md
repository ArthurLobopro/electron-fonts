# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Brawler from "@electron-fonts/brawler"

window.addEventListener("DOMContentLoaded", () => {
    Brawler.inject()
})
```