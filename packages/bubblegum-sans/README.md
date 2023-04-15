# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BubblegumSans from "@electron-fonts/bubblegum-sans"

window.addEventListener("DOMContentLoaded", () => {
    BubblegumSans.inject()
})
```