# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FaunaOne from "@electron-fonts/fauna-one"

window.addEventListener("DOMContentLoaded", () => {
    FaunaOne.inject()
})
```