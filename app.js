/* =====================================================================
   DIGITAL WISDOM — fonctionnement du site
   Vous n'avez normalement pas besoin de modifier ce fichier :
   les textes sont dans reglages.js et les ebooks dans ebooks.js.
   ===================================================================== */
(function () {
  "use strict";
  var R = window.REGLAGES || {};
  var LISTE = (window.EBOOKS || []).slice().sort(function (a, b) { return (a.ordre || 99) - (b.ordre || 99); });

  /* ---------- Outils ---------- */
  function echapper(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    })
      // Typographie française : pas de retour à la ligne avant ? ! : ; » ni après «
      .replace(/ ([?!:;»])/g, " $1").replace(/« /g, "« ");
  }
  function prix(n) {
    if (n == null || n === "") return "";
    return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + (R.devise || "FCFA");
  }
  function lienAchat(e) {
    var base = e.lienChariow || R.boutiqueChariow || "#";
    if (!R.ajouterSuiviAuxLiens || base === "#") return base;
    var sep = base.indexOf("?") === -1 ? "?" : "&";
    return base + sep + "utm_source=site-digital-wisdom&utm_medium=boutique&utm_campaign=" + encodeURIComponent(e.id);
  }
  function lienFiche(e) { return "ebook.html?e=" + encodeURIComponent(e.id); }
  function lienWhatsapp(texte) {
    if (!R.whatsapp) return "";
    return "https://wa.me/" + String(R.whatsapp).replace(/\D/g, "") + (texte ? "?text=" + encodeURIComponent(texte) : "");
  }
  function $(sel) { return document.querySelector(sel); }

  /* ---------- Icônes (SVG intégrés, aucun fichier externe) ---------- */
  var I = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2.5a9.43 9.43 0 0 0-8.1 14.27L2.5 21.5l4.87-1.4A9.43 9.43 0 1 0 12.04 2.5Zm0 17.2a7.77 7.77 0 0 1-3.97-1.09l-.28-.17-2.89.83.85-2.8-.19-.29a7.78 7.78 0 1 1 6.48 3.52Zm4.26-5.82c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.23-.6.76-.74.91-.14.16-.27.18-.5.06a6.37 6.37 0 0 1-3.17-2.77c-.24-.41.24-.38.69-1.27.08-.16.04-.29-.02-.41-.06-.12-.52-1.26-.72-1.72-.19-.45-.38-.39-.52-.4h-.45c-.16 0-.41.06-.62.29-.21.23-.82.8-.82 1.95s.84 2.27.96 2.42c.12.16 1.65 2.52 4 3.53 1.49.64 2.07.7 2.81.59.45-.07 1.38-.56 1.58-1.11.2-.55.2-1.02.14-1.11-.06-.1-.21-.16-.44-.28Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>',
    cadenas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>',
    mobile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18.5h2"/></svg>',
    carte: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="2.5"/><path d="M2.5 10h19M6.5 15h4"/></svg>',
    telecharger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 19.5h14"/></svg>',
    fleche: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>',
    bas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14m-5-5 5 5 5-5"/></svg>',
    livre: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"/></svg>',
    bouclier: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 5 6v5.5c0 4.4 3 8.2 7 9.5 4-1.3 7-5.1 7-9.5V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    bulle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.1A8 8 0 1 1 20 12Z"/></svg>'
  };

  var compteurLogo = 0;
  function logo(classe) {
    var id = "or" + (++compteurLogo);
    return '<svg class="' + (classe || "") + '" viewBox="0 0 100 100" role="img" aria-label="' + echapper(R.nomMarque || "Digital Wisdom") + '">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ecd29b"/><stop offset=".5" stop-color="#c9a465"/><stop offset="1" stop-color="#9c7840"/></linearGradient></defs>' +
      '<circle cx="50" cy="50" r="48" fill="#2b241c"/>' +
      '<circle cx="50" cy="50" r="43.5" fill="none" stroke="url(#' + id + ')" stroke-width="1.3"/>' +
      '<circle cx="50" cy="50" r="40" fill="none" stroke="url(#' + id + ')" stroke-width=".5" opacity=".7"/>' +
      '<path d="M50 15.5l1.5 3.3 3.6.4-2.7 2.4.8 3.5-3.2-1.9-3.2 1.9.8-3.5-2.7-2.4 3.6-.4z" fill="url(#' + id + ')"/>' +
      '<text x="50" y="63" text-anchor="middle" font-family="Titre, Georgia, serif" font-weight="700" font-size="33" letter-spacing="-.5" fill="url(#' + id + ')">DW</text>' +
      '<path d="M35 72.5h30" stroke="url(#' + id + ')" stroke-width="1"/>' +
      '</svg>';
  }

  /* ---------- Livre 3D ---------- */
  function livre3D(couv, couleurDos, titre, flotte, prioritaire) {
    return '<div class="livre-scene' + (flotte ? " flotte" : "") + '">' +
      '<div class="livre" style="--dos:' + echapper(couleurDos || "#1a1410") + '">' +
      '<div class="livre-arriere"></div><div class="livre-dos"></div><div class="livre-pages"></div>' +
      '<div class="livre-face"><img src="' + echapper(couv) + '" alt="Couverture du livre « ' + echapper(titre) + ' »" loading="' + (prioritaire ? "eager" : "lazy") + '" decoding="async" width="600" height="900"></div>' +
      '<div class="livre-ombre"></div></div></div>';
  }
  function visuelProduit(e, flotte, prioritaire) {
    if (e.type === "pack" && e.couverturesPack && e.couverturesPack.length > 1) {
      return '<div class="duo">' + e.couverturesPack.slice(0, 2).map(function (c) { return livre3D(c, e.couleurDos, e.titre, flotte, prioritaire); }).join("") + "</div>";
    }
    return livre3D(e.couverture, e.couleurDos, e.titre, flotte, prioritaire);
  }

  /* ---------- Éléments communs ---------- */
  function boutonsReseaux() {
    var h = "";
    if (R.instagram) h += '<a class="reseau" href="' + echapper(R.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram">' + I.instagram + "</a>";
    if (R.whatsapp) h += '<a class="reseau" href="' + lienWhatsapp("Bonjour Digital Wisdom, j'ai une question sur vos ebooks.") + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + I.whatsapp + "</a>";
    if (R.email) h += '<a class="reseau" href="mailto:' + echapper(R.email) + '" aria-label="E-mail">' + I.mail + "</a>";
    return h;
  }
  function carte(e) {
    var promo = e.prixBarre && e.prixBarre > e.prix;
    return '<article class="carte apparait" data-categorie="' + echapper(e.categorie) + '">' +
      '<div class="carte-haut">' +
      '<a class="carte-image" href="' + lienFiche(e) + '" aria-label="Voir le détail : ' + echapper(e.titre) + '">' +
      (e.type === "pack" && e.couverturesPack ? livre3D(e.couverturesPack[1] || e.couverture, e.couleurDos, e.titre) : livre3D(e.couverture, e.couleurDos, e.titre)) + "</a>" +
      '<div class="carte-infos">' + (e.badge ? '<span class="badge">' + echapper(e.badge) + "</span>" : "") +
      '<span class="carte-cat">' + echapper(e.categorie) + "</span>" +
      '<h3 class="titre-serif"><a href="' + lienFiche(e) + '">' + echapper(e.titre) + "</a></h3>" +
      '<p class="sous-titre">' + echapper(e.sousTitre) + "</p>" +
      '<p class="prix">' + prix(e.prix) + (promo ? "<s>" + prix(e.prixBarre) + "</s>" : "") + "</p></div></div>" +
      '<p class="carte-accroche">' + echapper(e.accroche) + "</p>" +
      '<div class="carte-bas"><span class="pret">' + I.telecharger + "Téléchargement immédiat après le paiement</span>" +
      '<a class="bouton bouton-or" href="' + echapper(lienAchat(e)) + '" data-achat="' + echapper(e.id) + '">Acheter maintenant</a>' +
      '<a class="bouton bouton-ligne" href="' + lienFiche(e) + '">En savoir plus ' + I.fleche + "</a></div></article>";
  }
  function faqHtml(liste) {
    return liste.map(function (f) {
      return '<details class="apparait"><summary>' + echapper(f.q) + '</summary><div class="reponse">' + echapper(f.r) + "</div></details>";
    }).join("");
  }
  function jsonLd(objet) {
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(objet);
    document.head.appendChild(s);
  }
  function piedDePage() {
    var el = $("#pied");
    if (!el) return;
    el.innerHTML = '<div class="conteneur"><a class="marque-mini" href="index.html">' + logo() + "<span>" + echapper(R.nomMarque) + "</span></a>" +
      "<p>Paiements sécurisés et livraison des fichiers assurés par Chariow.</p>" +
      "<p>© " + new Date().getFullYear() + " " + echapper(R.nomMarque) + ". Tous droits réservés.</p></div>";
  }
  function whatsappFlottant(texte) {
    if (!R.whatsapp) return;
    var a = document.createElement("a");
    a.className = "whatsapp-flottant";
    a.href = lienWhatsapp(texte);
    a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("aria-label", "Nous écrire sur WhatsApp");
    a.innerHTML = I.whatsapp;
    document.body.appendChild(a);
  }
  function barreHaut() {
    document.querySelectorAll("[data-logo]").forEach(function (el) { el.innerHTML = logo(); });
    document.querySelectorAll("[data-nom]").forEach(function (el) { el.textContent = R.nomMarque; });
  }

  /* ---------- Apparitions au défilement ---------- */
  function animations() {
    var els = document.querySelectorAll(".apparait");
    if (!("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("vu"); }); return; }
    var obs = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("vu"); obs.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ---------- Pixel Meta (facultatif) ---------- */
  function pixel() {
    if (!R.pixelMeta) return;
    /* eslint-disable */
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    /* eslint-enable */
    window.fbq("init", String(R.pixelMeta));
    window.fbq("track", "PageView");
    document.addEventListener("click", function (ev) {
      var a = ev.target.closest && ev.target.closest("[data-achat]");
      if (!a) return;
      var e = LISTE.filter(function (x) { return x.id === a.getAttribute("data-achat"); })[0];
      if (e) window.fbq("track", "InitiateCheckout", { content_ids: [e.id], content_name: e.titre, value: e.prix, currency: "XOF" });
    });
  }

  /* =====================================================================
     PAGE D'ACCUEIL
     ===================================================================== */
  function pageAccueil() {
    $("#slogan").textContent = R.slogan;
    $("#presentation").textContent = R.presentation;
    $("#nom-marque").textContent = R.nomMarque;
    $("#logo-grand").innerHTML = logo("logo-grand");
    $("#reseaux").innerHTML = boutonsReseaux();

    // Éventail de livres dans la bannière : les 3 premiers ebooks (hors packs)
    var vedettes = LISTE.filter(function (e) { return e.type !== "pack"; }).slice(0, 3);
    var ordreAffichage = vedettes.length === 3 ? [vedettes[1], vedettes[0], vedettes[2]] : vedettes;
    $("#eventail").innerHTML = ordreAffichage.map(function (e) {
      return '<a class="livre-pose" href="' + lienFiche(e) + '" aria-label="' + echapper(e.titre) + '">' + livre3D(e.couverture, e.couleurDos, e.titre, true, true) + "</a>";
    }).join("");

    // Offres groupées (packs) — uniquement celles qui existent dans ebooks.js
    var packs = LISTE.filter(function (e) { return e.type === "pack"; });
    var zoneOffre = $("#offres");
    if (!packs.length) { zoneOffre.hidden = true; }
    else {
      $("#offres-contenu").innerHTML = packs.map(function (p) {
        var eco = p.prixBarre && p.prixBarre > p.prix ? p.prixBarre - p.prix : 0;
        var pct = eco ? Math.round((eco / p.prixBarre) * 100) : 0;
        return '<div class="offre apparait"><div class="offre-visuel">' + visuelProduit(p, true) + "</div>" +
          '<div class="offre-texte"><span class="surtitre">' + echapper(p.badge || "Offre groupée") + "</span>" +
          '<h3 class="titre-serif">' + echapper(p.titre) + "</h3>" +
          '<p class="sous">' + echapper(p.sousTitre) + "</p>" +
          '<p class="desc">' + echapper(p.accroche) + "</p>" +
          '<div class="prix-ligne"><span class="prix-grand">' + prix(p.prix) + "</span>" + (eco ? '<span class="prix-barre">' + prix(p.prixBarre) + "</span>" : "") + "</div>" +
          (eco ? '<span class="economie">Vous économisez ' + prix(eco) + " (" + pct + " %)</span>" : "") +
          '<div class="offre-actions"><a class="bouton bouton-or" href="' + echapper(lienAchat(p)) + '" data-achat="' + echapper(p.id) + '">Acheter maintenant</a>' +
          '<a class="bouton bouton-ligne" href="' + lienFiche(p) + '">Voir le contenu du pack ' + I.fleche + "</a></div></div></div>";
      }).join("");
    }

    // Filtres par catégorie
    var cats = [];
    LISTE.forEach(function (e) { if (e.categorie && cats.indexOf(e.categorie) === -1) cats.push(e.categorie); });
    var filtres = $("#filtres");
    filtres.innerHTML = ['<button class="filtre" type="button" aria-pressed="true" data-cat="">Tous</button>'].concat(cats.map(function (c) {
      return '<button class="filtre" type="button" aria-pressed="false" data-cat="' + echapper(c) + '">' + echapper(c) + "</button>";
    })).join("");
    var grille = $("#grille");
    grille.innerHTML = LISTE.map(carte).join("");
    filtres.addEventListener("click", function (ev) {
      var b = ev.target.closest("button[data-cat]");
      if (!b) return;
      filtres.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      var cat = b.getAttribute("data-cat");
      grille.querySelectorAll(".carte").forEach(function (c) {
        c.hidden = !!cat && c.getAttribute("data-categorie") !== cat;
        if (!c.hidden) c.classList.add("vu");
      });
    });

    // FAQ générale
    $("#faq-liste").innerHTML = faqHtml([
      { q: "Comment vais-je recevoir mon ebook ?", r: "Juste après le paiement, vous pouvez télécharger vos fichiers sur la page de confirmation. Vous recevez aussi un e-mail avec le lien de téléchargement." },
      { q: "Comment puis-je payer ?", r: "Le paiement se fait sur Chariow, notre plateforme de vente : par Mobile Money dans de nombreux pays africains, ou par carte bancaire (Visa, Mastercard). Les moyens proposés s'affichent selon votre pays au moment du paiement." },
      { q: "Le paiement est-il sécurisé ?", r: "Oui. Le paiement est entièrement traité par Chariow, une plateforme spécialisée dans la vente de produits numériques. Nous ne voyons jamais vos informations bancaires." },
      { q: "Puis-je lire les ebooks sur mon téléphone ?", r: "Oui. Les ebooks sont au format PDF, lisibles sur téléphone, tablette et ordinateur. Les tableaux Excel s'ouvrent avec les applications gratuites Microsoft Excel ou Google Sheets." },
      { q: "J'ai un problème avec mon achat, que faire ?", r: "Écrivez-nous sur WhatsApp en indiquant le titre de l'ebook et l'adresse e-mail utilisée pour l'achat : nous vous répondons et vous aidons à récupérer vos fichiers." },
      { q: "Les ebooks promettent-ils des résultats garantis ?", r: "Non. Nos ebooks vous donnent des méthodes, des exercices et des plans d'action concrets. Vos résultats dépendent de leur mise en pratique." }
    ]);

    // Contact
    var wa = lienWhatsapp("Bonjour Digital Wisdom, j'ai une question sur vos ebooks.");
    if (wa) { $("#contact-bouton").href = wa; } else { $("#contact").hidden = true; }

    // Données structurées (référencement)
    jsonLd({
      "@context": "https://schema.org", "@type": "Organization", name: R.nomMarque, slogan: R.slogan,
      description: R.presentation, url: location.href.split("#")[0].split("?")[0]
    });
    jsonLd({
      "@context": "https://schema.org", "@type": "ItemList", name: "Ebooks " + R.nomMarque,
      itemListElement: LISTE.map(function (e, i) {
        return { "@type": "ListItem", position: i + 1, name: e.titre, url: new URL(lienFiche(e), location.href).href };
      })
    });
    whatsappFlottant("Bonjour Digital Wisdom, j'ai une question sur vos ebooks.");
  }

  /* =====================================================================
     PAGE D'UN EBOOK
     ===================================================================== */
  function pageEbook() {
    var id = new URLSearchParams(location.search).get("e");
    var e = LISTE.filter(function (x) { return x.id === id; })[0];
    var zone = $("#fiche");
    if (!e) {
      zone.innerHTML = '<div class="conteneur introuvable"><h1 class="titre-serif">Ebook introuvable</h1><p>Ce lien ne correspond à aucun ebook.</p><p style="margin-top:20px"><a class="bouton bouton-or" href="index.html">Voir tous les ebooks</a></p></div>';
      document.title = "Ebook introuvable | " + R.nomMarque;
      return;
    }
    var achat = lienAchat(e);
    var promo = e.prixBarre && e.prixBarre > e.prix;
    var eco = promo ? e.prixBarre - e.prix : 0;
    var rassurance = '<div class="rassurance">' +
      "<span>" + I.cadenas + "Paiement sécurisé sur Chariow</span>" +
      "<span>" + I.mobile + "Mobile Money ou carte bancaire</span>" +
      "<span>" + I.telecharger + "Téléchargement immédiat, lisible sur téléphone</span></div>";

    var h = '<div class="conteneur fil"><a href="index.html">← Tous les ebooks</a></div>' +
      '<section class="fiche-heros"><div class="conteneur fiche-grille">' +
      '<div class="fiche-visuel apparait">' + visuelProduit(e, true, true) + "</div>" +
      '<div class="fiche-texte apparait"><span class="surtitre">' + echapper(e.categorie) + "</span>" +
      '<h1 class="titre-serif">' + echapper(e.titre) + "</h1>" +
      '<p class="sous-titre">' + echapper(e.sousTitre) + "</p>" +
      '<p class="accroche">' + echapper(e.accroche) + "</p>" +
      '<div class="encart-achat" id="encart-achat"><div class="prix-ligne"><span class="prix-grand">' + prix(e.prix) + "</span>" + (promo ? '<span class="prix-barre">' + prix(e.prixBarre) + "</span>" : "") + "</div>" +
      (promo ? '<span class="economie">Vous économisez ' + prix(eco) + "</span>" : "") +
      '<a class="bouton bouton-or bouton-large" href="' + echapper(achat) + '" data-achat="' + echapper(e.id) + '">Acheter maintenant</a>' + rassurance + "</div>" +
      "</div></div></section>";

    h += '<div class="conteneur etroit">';
    if (e.description) h += '<section class="bloc apparait"><p class="texte">' + echapper(e.description) + "</p></section>";
    var nature = e.type === "pack" ? "ce pack" : "ce livre";
    if (e.problemes && e.problemes.length) h += '<section class="bloc apparait"><span class="surtitre">Vous vous reconnaissez ?</span><h2 class="titre-serif">Les problèmes que ' + nature + ' vous aide à résoudre</h2><ul class="liste-croix">' + e.problemes.map(function (p) { return "<li>" + echapper(p) + "</li>"; }).join("") + "</ul></section>";
    if (e.benefices && e.benefices.length) h += '<section class="bloc apparait"><span class="surtitre">Ce que vous allez apprendre</span><h2 class="titre-serif">Les bénéfices concrets</h2><ul class="liste-coche">' + e.benefices.map(function (p) { return "<li>" + echapper(p) + "</li>"; }).join("") + "</ul></section>";
    if (e.inclus && e.inclus.length) h += '<section class="bloc apparait"><span class="surtitre">Ce que vous recevez</span><h2 class="titre-serif">Contenu de votre achat</h2><div class="inclus">' + e.inclus.map(function (p) { return "<span>" + echapper(p) + "</span>"; }).join("") + "</div></section>";

    if (e.type === "pack" && e.couverturesPack) {
      var livresPack = LISTE.filter(function (x) { return x.type !== "pack" && e.couverturesPack.indexOf(x.couverture) !== -1; });
      if (livresPack.length) h += '<section class="bloc apparait"><span class="surtitre">Les livres du pack</span><h2 class="titre-serif">Découvrez chaque livre en détail</h2><div class="grille">' + livresPack.map(carte).join("") + "</div></section>";
    }
    if (e.contenu && e.contenu.length) {
      var long = e.contenu.length > 8;
      h += '<section class="bloc apparait"><span class="surtitre">Au sommaire</span><h2 class="titre-serif">Les chapitres</h2><ol class="sommaire' + (long ? " replie" : "") + '" id="sommaire">' +
        e.contenu.map(function (c, i) {
          var m = String(c).split(" · ");
          if (m.length < 2) return '<li><span class="num">' + (i + 1) + "</span><span>" + echapper(c) + "</span></li>";
          if (m[0].length <= 3) return '<li><span class="num">' + echapper(m[0]) + "</span><span>" + echapper(m.slice(1).join(" · ")) + "</span></li>";
          return '<li><span class="num">✦</span><span><strong>' + echapper(m[0]) + "</strong> · " + echapper(m.slice(1).join(" · ")) + "</span></li>";
        }).join("") + "</ol>" +
        (long ? '<p class="centre" style="margin-top:14px"><button class="bouton bouton-ligne" type="button" id="voir-sommaire">Voir tout le sommaire</button></p>' : "") + "</section>";
    }
    if (e.pourQui) h += '<section class="bloc apparait"><span class="surtitre">Pour qui ?</span><h2 class="titre-serif">À qui s\'adresse ' + nature + ' ?</h2><p class="texte">' + echapper(e.pourQui) + "</p></section>";
    if (e.faq && e.faq.length) h += '<section class="bloc"><span class="surtitre">Questions fréquentes</span><h2 class="titre-serif">Vous vous demandez <span style="white-space:nowrap">peut-être</span></h2><div class="faq">' + faqHtml(e.faq) + "</div></section>";
    if (e.mention) h += '<section class="bloc apparait"><p class="mention">' + echapper(e.mention) + "</p></section>";
    h += '<section class="bloc apparait"><div class="cta-final"><span class="surtitre">Prêt à commencer ?</span><h2 class="titre-serif">' + echapper(e.titre) + "</h2>" +
      '<div class="prix-ligne" style="justify-content:center"><span class="prix-grand">' + prix(e.prix) + "</span>" + (promo ? '<span class="prix-barre">' + prix(e.prixBarre) + "</span>" : "") + "</div>" +
      '<a class="bouton bouton-or" href="' + echapper(achat) + '" data-achat="' + echapper(e.id) + '">Acheter maintenant</a>' +
      (R.whatsapp ? '<p style="margin-top:14px;font-size:14px">Une question avant d\'acheter ? <a class="lien-discret" target="_blank" rel="noopener" href="' + lienWhatsapp("Bonjour Digital Wisdom, j'ai une question sur « " + e.titre + " ».") + '">Écrivez-nous sur WhatsApp</a></p>' : "") +
      "</div></section>";

    var autres = LISTE.filter(function (x) { return x.id !== e.id && x.categorie === e.categorie; });
    if (autres.length < 2) autres = autres.concat(LISTE.filter(function (x) { return x.id !== e.id && autres.indexOf(x) === -1; }));
    autres = autres.slice(0, 2);
    h += "</div>";
    if (autres.length) h += '<section class="section section-beige"><div class="conteneur"><div class="centre"><span class="surtitre">Vous aimerez aussi</span></div><h2 class="section-titre titre-serif">D\'autres ebooks pour vous</h2><div class="grille">' + autres.map(carte).join("") + "</div></div></section>";

    zone.innerHTML = h;

    var bouton = $("#voir-sommaire");
    if (bouton) bouton.addEventListener("click", function () { $("#sommaire").classList.remove("replie"); bouton.remove(); });

    // Barre d'achat collante
    var barre = document.createElement("div");
    barre.className = "barre-achat";
    barre.innerHTML = '<div class="infos"><strong>' + echapper(e.titre) + "</strong><span>" + prix(e.prix) + '</span></div><a class="bouton bouton-or" href="' + echapper(achat) + '" data-achat="' + echapper(e.id) + '">Acheter maintenant</a>';
    document.body.appendChild(barre);
    var encart = $("#encart-achat");
    if ("IntersectionObserver" in window && encart) {
      new IntersectionObserver(function (en) {
        var visible = !en[0].isIntersecting && en[0].boundingClientRect.top < 0;
        barre.classList.toggle("visible", visible);
        document.body.classList.toggle("avec-barre-achat", visible);
      }).observe(encart);
    }

    // Titre, description et données structurées
    document.title = e.titre + " : " + e.sousTitre + " | " + R.nomMarque;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", (e.accroche + " " + (e.description || "")).slice(0, 158));
    jsonLd({
      "@context": "https://schema.org", "@type": "Product", name: e.titre, description: e.description || e.accroche,
      image: new URL(e.couverture, location.href).href, brand: { "@type": "Brand", name: R.nomMarque }, category: e.categorie,
      offers: { "@type": "Offer", price: String(e.prix), priceCurrency: "XOF", availability: "https://schema.org/InStock", url: e.lienChariow }
    });
    if (e.faq && e.faq.length) jsonLd({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: e.faq.map(function (f) { return { "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.r } }; })
    });
    whatsappFlottant("Bonjour Digital Wisdom, j'ai une question sur « " + e.titre + " ».");
  }

  /* ---------- Démarrage ---------- */
  barreHaut();
  if (document.body.getAttribute("data-page") === "accueil") pageAccueil();
  if (document.body.getAttribute("data-page") === "ebook") pageEbook();
  piedDePage();
  animations();
  pixel();
})();
