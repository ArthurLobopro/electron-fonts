# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MarcellusSC from "@electron-fonts/marcellus-sc"

window.addEventListener("DOMContentLoaded", () => {
    MarcellusSC.inject()
})
```