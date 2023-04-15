# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Griffy from "@electron-fonts/griffy"

window.addEventListener("DOMContentLoaded", () => {
    Griffy.inject()
})
```