# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DoHyeon from "@electron-fonts/do-hyeon"

window.addEventListener("DOMContentLoaded", () => {
    DoHyeon.inject()
})
```