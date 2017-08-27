online-cv
=========

Simple CV webpage, using a JSON format in `cv.js` for multilingual CV.

## Format
One level of the CV (one `item`) is made of :
- A label:
 - An object of attributes : `'language' : 'text in language'`
- `details` : a list of `item`s
- `start_date` and `end_date` for date ranges (work, studies, ...)
- `url` which must have a `target` attribute and may have a `label` attribute
  to pu inside the `<a>` tag

Additinnally, the first level can include :
- `lang` : list of the languages to use
