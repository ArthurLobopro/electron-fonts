# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Gulzar from "@electron-fonts/gulzar"

window.addEventListener("DOMContentLoaded", () => {
    Gulzar.inject()
})
```