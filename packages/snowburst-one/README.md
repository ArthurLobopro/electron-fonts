# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SnowburstOne from "@electron-fonts/snowburst-one"

window.addEventListener("DOMContentLoaded", () => {
    SnowburstOne.inject()
})
```