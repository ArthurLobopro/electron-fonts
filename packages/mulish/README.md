# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Mulish from "@electron-fonts/mulish"

window.addEventListener("DOMContentLoaded", () => {
    Mulish.inject()
})
```