# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ComingSoon from "@electron-fonts/coming-soon"

window.addEventListener("DOMContentLoaded", () => {
    ComingSoon.inject()
})
```