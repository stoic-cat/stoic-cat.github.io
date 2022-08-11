# Private Notetaking App

Choosing the ideal private notetaking app based on the following requirements.

## Requirements

- [Future proof](https://sive.rs/plaintext); Must be in plain text and an open format. e.g. Markdown
- If in Markdown, must be as close to standard Markdown as possible so that it renders well regardless of md viewer/app. Reduces friction of moving to a different app if required.
- Definitely no lock in of data
- Supports Linux
- Free. Preferrably open source
- Searchable
- Big plus if it has backlinks

## Contenders

- [Logseq](https://logseq.com/)
- [Trilium](https://github.com/zadam/trilium)
- [Zettlr](https://www.zettlr.com/)
- [Joplin](https://joplinapp.org/)
- [Obsidian](https://obsidian.md/)
- [Dendron](https://marketplace.visualstudio.com/items?itemName=dendron.dendron)
- [Marktext](https://github.com/marktext/marktext)

## Logseq

At first glance, it seems like I have hit the jackpot with Logseq as it is open source and uses local markdown files. However, the deal breaker is that it uses its own specific 'outliner' md format that will not display well in other md viewers. It also [does not take plain md files or allow us to write free-form text](https://news.ycombinator.com/item?id=29688400). It'll be a hard pass for me.

## Trilium

Hierarchical. Does not actually store as markdown format. Stores data in a database and need to use import/export feature for markdown files just like Joplin. Only able to modify it in WYSIWYG. Maintainer says [there are no plans to allow switching between raw md and WYSIWYG mode as Trilium is not meant to be a md editor](https://github.com/zadam/trilium/issues/2026#issuecomment-906657247). Would rather go with Joplin given that Trilium has more downsides comparatively.

## Zettlr

Stores as markdown format in a workspace (directory). Comes with dark mode option by default. Merges both raw and md preview into the same page instead of rendering it side by side. Easy export features to multiple formats (html, pdf etc) similar to pandoc. So far looks better than Joplin for my requirements. No android app. Moving between folders is clunky. Moving files between folders require the usage of an external app. No option to do so in Zettlr itself. To test:

- tagging
- search between folders
- organizing

## Joplin

Evernote alternative. Does not actually store as markdown format. Stores data in a database and need to use import/export feature for markdown files. Default backup format is JEX format (Joplin Export file). Editing in external editor is a pain. Does not come with dark mode by default. A couple of minus points but so far nothing too much of a deal breaker to make it a pass for me. Biggest pain would be to customize/specify location of notebook(s) so that it can be synced with Syncthing. Has android app.

## Obsidian

So far it seems to tick all the checkboxes of what I need, except for the fact that Obsidian itself is not open source even though it does take local md files. Will have to test further.

## Dendron

Don't know enough about it yet. Will have to test. But downside is that it relies on a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=dendron.dendron). To check if all other options have deal breakers.

## Marktext

Literally an open source Markdown Editor that allows editing in both raw mode and preview mode. Fits almost exactly what I need. Very similar to Obsidian. Or rather, Obsidian is very similar to a regular md editor with a bit of extra features (and plugins from the community if you want to jack it up). Cross platform and available in mac, linux, windows, but not on android.

## Verdict

Went with Marktext.

## Links

- [Zettlr – FOSS markdown editor for personal knowledge management and publishing](https://news.ycombinator.com/item?id=23723775) (Good discussion and links in comments)
- [Johny Decimal System](https://johnnydecimal.com/)
- [Show HN: Promnesia – an attempt to fix broken web history](https://news.ycombinator.com/item?id=23668507)