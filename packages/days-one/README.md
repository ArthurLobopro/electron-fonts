# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DaysOne from "@electron-fonts/days-one"

window.addEventListener("DOMContentLoaded", () => {
    DaysOne.inject()
})
```