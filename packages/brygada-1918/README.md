# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Brygada1918 from "@electron-fonts/brygada-1918"

window.addEventListener("DOMContentLoaded", () => {
    Brygada1918.inject()
})
```