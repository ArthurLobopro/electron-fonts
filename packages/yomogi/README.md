# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Yomogi from "@electron-fonts/yomogi"

window.addEventListener("DOMContentLoaded", () => {
    Yomogi.inject()
})
```