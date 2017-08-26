online-cv
=========

Simple CV webpage, using a JSON format in `cv.js` for multilingual CV.

## Format
One level of the CV (ont `item`) is made of :
- A label (compulsory):
 - An object of attributes : `'language' : 'text in language'`
- `details` : a list of `item`s
- `start_date` and `end_date` for date ranges (work, studies, ...)

Additinnally, the first level can include :
- `lang` : list of the languages to use
- `version` for reference.
