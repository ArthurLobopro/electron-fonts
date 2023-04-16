# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MysteryQuest from "@electron-fonts/mystery-quest"

window.addEventListener("DOMContentLoaded", () => {
    MysteryQuest.inject()
})
```