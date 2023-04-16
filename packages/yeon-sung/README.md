# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import YeonSung from "@electron-fonts/yeon-sung"

window.addEventListener("DOMContentLoaded", () => {
    YeonSung.inject()
})
```