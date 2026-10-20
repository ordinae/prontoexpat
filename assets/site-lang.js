/* Keep site language when moving between Home / Legal tabs (static multi-page site). */
(function () {
  const STORAGE_KEY = "pe_site_lang";
  const EXPLICIT_KEY = "pe_lang_explicit";
  const PAGE_FILES = {
    index: "index.html",
    privacy: "privacy.html",
    terms: "terms.html",
    deletion: "account-deletion.html",
  };

  function urlFor(lang, pageKey) {
    const file = PAGE_FILES[pageKey];
    if (!file) return null;
    return lang === "en" ? file : `${lang}/${file}`;
  }

  const pageKey = document.body.dataset.pePage;
  const current = document.documentElement.lang || "en";

  if (sessionStorage.getItem(EXPLICIT_KEY)) {
    sessionStorage.removeItem(EXPLICIT_KEY);
    localStorage.setItem(STORAGE_KEY, current);
  } else {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && stored !== current && pageKey) {
      const target = urlFor(stored, pageKey);
      if (target) {
        window.location.replace(target);
        return;
      }
    }
    localStorage.setItem(STORAGE_KEY, current);
  }

  document.querySelectorAll(".lang-picker__list a[hreflang]").forEach((link) => {
    link.addEventListener("click", () => {
      sessionStorage.setItem(EXPLICIT_KEY, "1");
      localStorage.setItem(STORAGE_KEY, link.getAttribute("hreflang") || current);
    });
  });
})();
