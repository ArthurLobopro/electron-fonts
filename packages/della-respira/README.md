# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DellaRespira from "@electron-fonts/della-respira"

window.addEventListener("DOMContentLoaded", () => {
    DellaRespira.inject()
})
```