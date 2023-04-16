# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikBubbles from "@electron-fonts/rubik-bubbles"

window.addEventListener("DOMContentLoaded", () => {
    RubikBubbles.inject()
})
```