# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LuckiestGuy from "@electron-fonts/luckiest-guy"

window.addEventListener("DOMContentLoaded", () => {
    LuckiestGuy.inject()
})
```