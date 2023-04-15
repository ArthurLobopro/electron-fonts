# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Alkalami from "@electron-fonts/alkalami"

window.addEventListener("DOMContentLoaded", () => {
    Alkalami.inject()
})
```