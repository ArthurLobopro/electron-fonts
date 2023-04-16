# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SueEllenFrancisco from "@electron-fonts/sue-ellen-francisco"

window.addEventListener("DOMContentLoaded", () => {
    SueEllenFrancisco.inject()
})
```