# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import WaitingfortheSunrise from "@electron-fonts/waiting-for-the-sunrise"

window.addEventListener("DOMContentLoaded", () => {
    WaitingfortheSunrise.inject()
})
```