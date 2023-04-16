# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PuppiesPlay from "@electron-fonts/puppies-play"

window.addEventListener("DOMContentLoaded", () => {
    PuppiesPlay.inject()
})
```