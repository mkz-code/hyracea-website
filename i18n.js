/* =========================================================
   Sprachumschaltung Deutsch / Englisch
   - Der deutsche Text steht direkt im HTML.
   - Hier stehen nur die englischen Übersetzungen.
   - Neuen Text übersetzen: im HTML data-i18n="schluessel" setzen
     und unten bei EN denselben Schlüssel mit dem englischen Text eintragen.
   ========================================================= */

const EN = {
  // Seitentitel
  "title.home": "HyRaceA | Hydrogen RC Racing Team · TU Graz",
  "title.s2026": "Season 2026 | HyRaceA",

  // Navigation & allgemein
  "nav.home": "Home",
  "nav.car": "Car",
  "nav.team": "Team",
  "nav.s2026": "Season 2026",
  "nav.s2027": "Season 2027",
  "nav.contact": "Contact",
  "badge.current": "Current season",
  "badge.last": "Last season",
  "footer.imprint": "Legal notice",
  "footer.privacy": "Privacy",

  // Platzhalter
  "ph.ph": "[Placeholder]",
  "ph.date": "[Date]",
  "ph.place": "[Location]",
  "ph.dateplace": "[Date · Location]",

  // Startseite
  "hero.support": "Support us",
  "about.title": "About us",
  "about.text": "We are a student team from TU Graz developing our own radio-controlled race car powered by a small hydrogen fuel cell, from the chassis to the electronics. With it we compete in the H2 Grand Prix (more on the <a href=\"competition.html\">competition page</a>). Our goal: to get as much speed as possible out of the fuel cell's limited power through relentless optimisation.",
  "band.lead": "A complete redesign of the car.",
  "band.next": "Next race",
  "band.car": "Our car",
  "band.carval": "Staubsauger 2.0",
  "band.new": "New this year",
  "band.newval": "Live telemetry",
  "car.title": "Car season 2027",
  "car.photo": "Photo / rendering of the car",
  "car.text": "[Placeholder] Short description of the car and what changed compared to 2026.",
  "spec.fc": "Fuel cell",
  "spec.motor": "Motor",
  "spec.storage": "Energy storage",
  "spec.electronics": "Electronics",
  "spec.weight": "Weight",
  "cal.title": "Race calendar 2027",
  "cal.race1": "[Race 1]",
  "cal.race2": "[Race 2]",
  "cal.final": "[Final]",
  "team.mech": "Mechanical team",
  "team.elec": "Electrical team",
  "team.role": "[Role]",
  "team.coach": "Coach · [Institute]",
  "sponsors.title": "Partners & sponsors",
  "sponsors.note": "Interested in supporting us? <a href=\"#contact\">Get in touch.</a>",

  // Saison 2026
  "s26.lead": "From the qualifying in Chemnitz to the Promo Award at the World Final in Bulle.",
  "s26.recap": "Recap",
  "s26.text": "At the prototype qualifying in Chemnitz we finished 2nd with our HyRaceA Aero and earned our ticket to the H2 Grand Prix World Final. For the final in Bulle, Switzerland, we developed a completely new car: the <strong>Staubsauger 1.0</strong> (German for “vacuum cleaner”), with a self-designed chassis, steering and suspension. At the 10th World Final we finished 8th and won the <strong>Promo Award in the Prototype class</strong>.",
  "s26.photos": "Photos",
  "s26.ticket": "Ticket to the World Final",
  "s26.front": "Steering & suspension",
  "s26.powertrain": "Powertrain",

  // Wettbewerb
  "title.comp": "The competition | HyRaceA",
  "nav.comp": "Competition",
  "hero.comp": "How does H2GP work?",
  "band.class": "Class",
  "comp.badge": "The competition",
  "comp.lead": "An international racing series for radio-controlled cars that run on hydrogen only. To win, you have to be fast <em>and</em> efficient.",
  "comp.what": "What is it about?",
  "comp.whattext": "School and university teams from all over the world build RC race cars powered by a hydrogen fuel cell. It is not a short sprint but an endurance race: hydrogen is limited, and whoever completes the most laps wins. We compete in the <strong>H2 Prototype</strong> class, the most open class, where the whole car may be self-developed and there is no battery, only hydrogen.",
  "comp.s1": "race at the World Final",
  "comp.s2": "Hydrostiks max. per 6-hour race",
  "comp.s3": "battery allowed",
  "comp.s4": "maximum weight",
  "comp.race": "How a race works",
  "comp.r1": "Technical inspection",
  "comp.r1t": "Before the start, dimensions, weight and safety of every car are checked. All Hydrostiks are handed in, capacitors must be empty.",
  "comp.r2": "Endurance",
  "comp.r2t": "Depending on the event 2 to 6 hours with up to 20 cars on track. At least two drivers per team take turns.",
  "comp.r3": "Pit stops",
  "comp.r3t": "When a Hydrostik is empty, the car comes into the pits and gets a new cartridge. A quick, clean swap saves valuable time.",
  "comp.season": "The way through the season",
  "comp.q": "Qualifiers",
  "comp.qt": "Regional races where the best teams qualify for the next stage.",
  "comp.n": "National finals",
  "comp.nt": "Depending on the country, the next step on the way up.",
  "comp.wt": "The best teams in the world meet for a 6-hour race. We were there in 2026 and won the Promo Award.",
  "comp.awards": "What is judged",
  "comp.awardslead": "Besides the race itself, there are awards for engineering, presentation and teamwork.",
  "comp.a1": "The most laps at the end of the race.",
  "comp.a2": "The most laps per Hydrostik used.",
  "comp.a3": "The best look and the best self-made body.",
  "comp.a4": "The most advanced ideas, presented to the jury and in the technical report.",
  "comp.a5": "The most convincing presentation and the best team video.",
  "comp.a6": "The fastest and best coordinated pit stop.",
  "comp.rules": "The key rules for the car",
  "comp.l1": "H-30 or H-Cell 2.0 fuel cell, hydrogen only from Hydrostiks",
  "comp.l2": "The chassis may be completely self-built",
  "comp.l3": "Length 320 to 470 mm, width 170 to 220 mm, height max. 170 mm",
  "comp.l4": "Race-ready weight max. 2,300 g",
  "comp.l5": "Capacitors allowed, but only charged with hydrogen",
  "comp.l6": "Telemetry is allowed",
  "comp.l7": "No batteries",
  "comp.l8": "No electronic gyroscopes",
  "comp.source": "Source: H2GP PRO Rulebook 2026/2027, H2 Prototype Class. All details at <a href=\"https://www.h2grandprix.com\" target=\"_blank\" rel=\"noopener\">h2grandprix.com</a>.",

  // Neu: Fußzeile, Rechtstexte, Datenblatt 2026
  "footer.place": "Graz, Austria",
  "title.imp": "Legal notice | HyRaceA", "title.imph": "Legal notice",
  "title.ds": "Privacy policy | HyRaceA", "title.dsh": "Privacy policy",
  "legal.note": "This page is only available in German, as required by Austrian law.",
  "s26.sheet": "Data sheet Staubsauger 1.0",
  "spec.energy": "Energy source",
  "spec.chassis": "Chassis",
  "spec.body": "Body",
  "s26.d1": "Hydrogen fuel cell, around 30 W",
  "s26.d2": "Supercapacitors as power buffer",
  "s26.d3": "Electric motor",
  "s26.d4": "In-house development made of carbon",
  "s26.d5": "Self-built from carbon",
  "s26.d6": "approx. 1.2 kg",
  "s26.f1": "On track in Bulle",
  "s26.f4": "Start of the World Final",
  "s26.f5": "Chassis & body",
  "s26.ph1": "Photo, e.g. race track",
  "s26.ph2": "Photo, e.g. car on track",
  "s26.ph3": "Photo, e.g. pit area",
  "spec.drive": "Drive",

  // Seitenstruktur
  "nav.partner": "Partners &amp; contact",
  "title.team": "Team | HyRaceA",
  "title.partner": "Partners & contact | HyRaceA",
  "hero.team": "Our team",
  "contact.tu": "TU Graz team page",

  // Saison-Menü, Saison 2025, Ergebnisse
  "nav.season": "Season",
  "nav.s2025": "Season 2025",
  "badge.s2025": "Season 2025",
  "title.s2025": "Season 2025 | HyRaceA",
  "s25.lead": "3rd place at the World Final in Chemnitz.",
  "s25.text": "In the 2025 season we finished 2nd at the prototype qualifying in Chemnitz and qualified for the H2 Grand Prix World Final. The final also took place in Chemnitz in August 2025, and we finished <strong>3rd</strong> in the Prototype class.",
  "s25.f1": "3rd place at the World Final",
  "s25.f2": "Our 2025 car",
  "r.p2": "2nd place",
  "r.p3": "3rd place",
  "r.p8": "8th place",
  "r.d26q": "30 May 2026",
  "r.d26w": "July 2026",
  "r.d25w": "August 2025",
  "r.proto": "Prototype class",
};

const FLAG = { de: "flag-at", en: "flag-gb" };

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.dataset.de === undefined) el.dataset.de = el.innerHTML; // deutschen Text merken
    const key = el.dataset.i18n;
    el.innerHTML = lang === "en" && EN[key] !== undefined ? EN[key] : el.dataset.de;
  });
  document.querySelectorAll(".lang-btn .flag").forEach((f) => (f.className = "flag " + FLAG[lang]));
  document.querySelectorAll(".lang-code").forEach((c) => (c.textContent = lang.toUpperCase()));
  document.querySelectorAll(".lang-menu button").forEach((b) =>
    b.classList.toggle("current", b.dataset.lang === lang)
  );
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

// Dropdown öffnen / schließen
document.querySelectorAll(".lang").forEach((box) => {
  const btn = box.querySelector(".lang-btn");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = box.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  box.querySelectorAll(".lang-menu button").forEach((b) =>
    b.addEventListener("click", () => {
      setLang(b.dataset.lang);
      box.classList.remove("open");
      btn.setAttribute("aria-expanded", false);
    })
  );
});
document.addEventListener("click", () =>
  document.querySelectorAll(".lang.open").forEach((b) => b.classList.remove("open"))
);

// Startsprache: gespeicherte Wahl, sonst Browsersprache (Deutsch oder sonst Englisch)
let start = "de";
try { start = localStorage.getItem("lang") || ""; } catch (e) { start = ""; }
if (!start) start = (navigator.language || "de").toLowerCase().startsWith("de") ? "de" : "en";
setLang(start);


/* =========================================================
   Rot-weiß-roter Streifen im Hintergrund (Parallax):
   bewegt sich beim Scrollen langsamer als der Inhalt
   ========================================================= */
(function () {
  const stripe = document.createElement("div");
  stripe.className = "bg-stripe";
  stripe.setAttribute("aria-hidden", "true");
  document.body.prepend(stripe);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let ticking = false;
  function update() {
    stripe.style.transform = "translateY(" + (-window.scrollY * 0.35) + "px) rotate(-12deg)";
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
})();


/* Saison-Menü: per Klick öffnen (für Handy), am PC zusätzlich per Hover */
document.querySelectorAll(".nav-drop").forEach((drop) => {
  const btn = drop.querySelector(".nav-drop-btn");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = drop.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
});
document.addEventListener("click", () =>
  document.querySelectorAll(".nav-drop.open").forEach((d) => d.classList.remove("open"))
);

/* =========================================================
   Startseite: Menüpunkt des gerade sichtbaren Abschnitts markieren
   ========================================================= */
(function () {
  if (!document.getElementById("team")) return; // nur auf der Startseite
  const nav = document.querySelector(".nav nav");
  const links = {
    start: nav.querySelector('a[href="index.html"]'),
    season: nav.querySelector(".nav-drop"),
    car: nav.querySelector('a[href="index.html#car"]'),
    team: nav.querySelector('a[href="index.html#team"]'),
    contact: nav.querySelector('a[href="index.html#contact"]'),
  };
  // Reihenfolge wie auf der Seite
  const order = ["season", "car", "team", "contact"];
  const sections = order.map((id) => [id, document.getElementById(id)]).filter(([, el]) => el);

  function update() {
    let current = "start";
    const line = window.innerHeight * 0.35;
    sections.forEach(([id, el]) => {
      if (el.getBoundingClientRect().top <= line) current = id;
    });
    // Ganz unten angekommen: letzter Abschnitt (Kontakt)
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "contact";
    Object.entries(links).forEach(([id, el]) => el && el.classList.toggle("active", id === current));
  }
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(() => { update(); ticking = false; }); ticking = true; }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
