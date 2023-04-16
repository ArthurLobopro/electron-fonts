# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TheGirlNextDoor from "@electron-fonts/the-girl-next-door"

window.addEventListener("DOMContentLoaded", () => {
    TheGirlNextDoor.inject()
})
```