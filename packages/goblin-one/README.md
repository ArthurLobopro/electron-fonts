# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GoblinOne from "@electron-fonts/goblin-one"

window.addEventListener("DOMContentLoaded", () => {
    GoblinOne.inject()
})
```