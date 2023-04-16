# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZenKakuGothicNew from "@electron-fonts/zen-kaku-gothic-new"

window.addEventListener("DOMContentLoaded", () => {
    ZenKakuGothicNew.inject()
})
```