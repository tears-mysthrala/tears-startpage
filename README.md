<div align="center">
    <img src="/img/README-decorator.png" width=300/>
</div>

# tears-startpage

Personal browser startpage. A static, single-page launcher with tabs, link
categories, a clock, weather and a search dialog — no build step, no backend.

This is a fork of [tartarus-startpage](https://github.com/AllJavi/tartarus-startpage)
by [AllJavi](https://github.com/AllJavi), which in turn is based on
[dawn](https://github.com/b-coimbra/dawn) by [b-coimbra](https://github.com/b-coimbra).
Both upstream projects are MIT-licensed; see [License](#license).

## Features

- Tabbed layout with link categories, switchable via number row, mouse wheel or click.
- Clock and weather widgets (location configurable).
- Search dialog with multiple engines, selected with `!<id>` prefixes.
- Configuration dialog to override the default config at runtime (stored in
  `localStorage`).
- Optional locally-installed icon font for faster loads.

## Usage

The page is fully static. Serve the repository root with any static file
server and open it as your browser's home/new-tab page:

```bash
# any of these works
python -m http.server 8080
npx serve .
```

Then point your browser (or a new-tab extension) at `http://localhost:8080`.
Opening `index.html` directly from disk also works in most browsers, but a
local server is recommended.

## Configuration

The default configuration lives in [`userconfig.js`](userconfig.js). You can
edit it directly, or override it at runtime through the config dialog
(<kbd>q</kbd>), which persists to `localStorage`.

Notable options:

- `temperature.location` / `temperature.scale`: weather location and unit.
- `search.engines`: map of `!<id>` prefixes to search engine URLs.
- `keybindings`: hotkey-to-action (or URL) map.
- `fastlink`: target of the quick-link button.
- `localIcons`: set to `true` to use the bundled icon font
  (`src/fonts`) instead of the CDN stylesheet.
- `tabs`: the tab/category/link tree shown on the page.

> **Note on the committed `userconfig.js`:** the file in this repo is the
> author's personal configuration. It was reviewed before publication and
> contains only links to public websites and services — no internal or
> sensitive URLs — so it is kept in the repo as a working example. If you fork
> this project, replace it with your own links (and consider gitignoring it if
> yours contains anything private).

Default search prefixes: `!g` Google, `!d` DuckDuckGo, `!y` YouTube,
`!r` Reddit, `!p` Pinterest.

## Keybindings

| Hotkey | Action |
| ------ | ------ |
| <kbd>Numrow</kbd> \| <kbd>MouseWheel</kbd> \| <kbd>Click</kbd> | Switch tabs |
| <kbd>s</kbd> | Search dialog |
| <kbd>q</kbd> | Config dialog |
| <kbd>m</kbd> | Custom URL shortcut (see `keybindings` in `userconfig.js`) |
| <kbd>Esc</kbd> | Close dialogs |

## Local icons

To reduce icon loading time, install the bundled icon font
([`src/fonts`](src/fonts)) locally and set `"localIcons": true` in the config
to disable the remote stylesheet.

## Banners

Background banners live in [`src/img/banners`](src/img/banners) and are
referenced per tab via `background_url` in the config.

## Credit

- [tartarus-startpage](https://github.com/AllJavi/tartarus-startpage) by AllJavi (MIT)
- [dawn](https://github.com/b-coimbra/dawn) by b-coimbra (MIT) — [preview](https://startpage.metaphoric.dev/)

## License

[MIT License](./LICENSE). The original upstream copyright notice is retained
as required by the MIT license; fork modifications are under the same terms.
