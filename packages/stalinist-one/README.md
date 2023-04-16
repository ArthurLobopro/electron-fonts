# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import StalinistOne from "@electron-fonts/stalinist-one"

window.addEventListener("DOMContentLoaded", () => {
    StalinistOne.inject()
})
```