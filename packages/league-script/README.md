# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LeagueScript from "@electron-fonts/league-script"

window.addEventListener("DOMContentLoaded", () => {
    LeagueScript.inject()
})
```