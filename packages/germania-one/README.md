# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GermaniaOne from "@electron-fonts/germania-one"

window.addEventListener("DOMContentLoaded", () => {
    GermaniaOne.inject()
})
```