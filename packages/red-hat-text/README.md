# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RedHatText from "@electron-fonts/red-hat-text"

window.addEventListener("DOMContentLoaded", () => {
    RedHatText.inject()
})
```