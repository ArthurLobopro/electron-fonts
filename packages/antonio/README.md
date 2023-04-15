# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Antonio from "@electron-fonts/antonio"

window.addEventListener("DOMContentLoaded", () => {
    Antonio.inject()
})
```