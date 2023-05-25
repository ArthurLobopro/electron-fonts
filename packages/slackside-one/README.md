# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SlacksideOne from "@electron-fonts/slackside-one"

window.addEventListener("DOMContentLoaded", () => {
    SlacksideOne.inject()
})
```