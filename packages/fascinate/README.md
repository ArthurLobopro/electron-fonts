# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Fascinate from "@electron-fonts/fascinate"

window.addEventListener("DOMContentLoaded", () => {
    Fascinate.inject()
})
```