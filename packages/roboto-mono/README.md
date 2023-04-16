# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RobotoMono from "@electron-fonts/roboto-mono"

window.addEventListener("DOMContentLoaded", () => {
    RobotoMono.inject()
})
```