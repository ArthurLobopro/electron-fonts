# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SuezOne from "@electron-fonts/suez-one"

window.addEventListener("DOMContentLoaded", () => {
    SuezOne.inject()
})
```