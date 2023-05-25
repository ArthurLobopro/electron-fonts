# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CastoroTitling from "@electron-fonts/castoro-titling"

window.addEventListener("DOMContentLoaded", () => {
    CastoroTitling.inject()
})
```