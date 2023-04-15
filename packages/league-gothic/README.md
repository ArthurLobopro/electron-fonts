# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LeagueGothic from "@electron-fonts/league-gothic"

window.addEventListener("DOMContentLoaded", () => {
    LeagueGothic.inject()
})
```