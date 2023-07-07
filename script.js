var language = navigator.language || navigator.userLanguage;

console.log(language)

var languagePages = {
  fr: "language/french.html",
  lb: "language/luxembourgish.html",
  de: "language/deutsch.html",
  default: "language/english.html"
};

setTimeout(function() {
  var page = Object.keys(languagePages).find(function(lang) {
    return language.startsWith(lang);
  });

  if (page) {
    window.location.href = languagePages[page];
  } else {
    window.location.href = languagePages.default;
  }
}, 5000);