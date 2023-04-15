# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Kenia from "@electron-fonts/kenia"

window.addEventListener("DOMContentLoaded", () => {
    Kenia.inject()
})
```