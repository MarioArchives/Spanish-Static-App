# Terminaciones

Practise Spanish past and future tenses, in Latin American usage: ustedes instead of vosotros, the indefinido for finished events even from today, and Latin American vocabulary (carro, celular, apartamento). A sibling of the Polish app in `../polish`, sharing the same `app.js` and `styles.css`. No build step and no server needed.

Open `index.html` in a browser:

    xdg-open index.html

Click any word in a quiz sentence to hear it. Google Chrome has a Spanish voice; Brave has none:

    ./open-in-chrome.sh

## Files

- `data-past.js` and `data-future.js` hold the tense tables and quiz sentences. Check them with `node validate.js data-past.js PAST_TENSE`.
- `config.js` holds the language settings.
- `app.js` and `styles.css` are copies of the Polish app. When one side changes, copy the file across.

## Adding a sentence

Copy an entry in the `sentences` list. `word{translation}` sets the hover text and `___` marks the gap. A gender tag after the translation, such as `casa{house|f}` or `amigos{friend|m.pl}`, makes the hover card show gender and number. `p` gives the person of the answer (`yo`, `tú`, `él`, `nosotros`, `ellos`) and drives the highlighted conjugation table in the answer card.

## Quiz options

The start screen lets you pick how many sentences, whether to type answers or write them in a notebook and self-mark, and whether new and missed sentences come first. Progress is saved in the browser and an unfinished quiz can be continued later.
