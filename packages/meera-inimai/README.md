# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MeeraInimai from "@electron-fonts/meera-inimai"

window.addEventListener("DOMContentLoaded", () => {
    MeeraInimai.inject()
})
```