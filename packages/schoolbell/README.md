# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Schoolbell from "@electron-fonts/schoolbell"

window.addEventListener("DOMContentLoaded", () => {
    Schoolbell.inject()
})
```