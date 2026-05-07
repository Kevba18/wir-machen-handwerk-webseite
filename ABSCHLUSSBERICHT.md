# Abschlussbericht – Website-Audit & Korrekturen

Stand: Mai 2026  
Geprüft: alle öffentlichen Seiten der Website www.wir-machen-handwerk.de  
Kein Netlify-Deploy durchgeführt. Alle Änderungen sind lokal gespeichert.

---

## 1. Geprüfte Dateien

### Seiten (HTML)
| Datei | Status |
|---|---|
| `/index.html` | ✅ geprüft, korrigiert |
| `/digitales-portal/index.html` | ✅ geprüft, keine Änderungen |
| `/fuer-hausverwaltungen/index.html` | ✅ geprüft, korrigiert |
| `/fuer-versicherungen/index.html` | ✅ geprüft, korrigiert |
| `/fuer-sachverstaendige/index.html` | ✅ geprüft, korrigiert |
| `/fuer-handwerker/index.html` | ✅ geprüft, korrigiert |
| `/leistungen/index.html` | ✅ geprüft, keine Änderungen nötig |
| `/malerarbeiten/index.html` | ✅ geprüft, korrigiert |
| `/fliesenlegen/index.html` | ✅ geprüft, keine Änderungen nötig |
| `/bodenlegen/index.html` | ✅ geprüft, keine Änderungen nötig |
| `/estricharbeiten/index.html` | ✅ geprüft, keine Änderungen nötig |
| `/verputzarbeiten/index.html` | ✅ geprüft, keine Änderungen nötig |
| `/badsanierung/index.html` | ✅ geprüft, keine Änderungen nötig |
| `/schadensregulierung-im-versicherungsfall/index.html` | ✅ geprüft, keine Änderungen nötig |
| `/schadensmeldung/index.html` | ✅ geprüft, korrigiert |
| `/kontakt/index.html` | ✅ geprüft, keine Änderungen nötig |
| `/impressum/index.html` | ✅ geprüft, keine Änderungen nötig |
| `/datenschutz/index.html` | ✅ geprüft, korrigiert |

### Assets
| Datei | Status |
|---|---|
| `/css/style.css` | ✅ geprüft, korrigiert (Google Fonts → lokal) |
| `/css/fonts/*.woff2` (6 Dateien) | ✅ neu erstellt (lokal gehostet) |
| `/js/main.js` | ✅ geprüft, ergänzt (dynamisches Copyright-Jahr) |
| `LEGAL_TODOS.md` | ✅ aktualisiert |

---

## 2. Fehler gefunden und behoben

### 2.1 DSGVO-Sprache und juristische Übertreibungen

**Problem:** Mehrere Seiten enthielten absolute Formulierungen wie „DSGVO-konform", „rechtssichere Dokumentation", „lückenlose Dokumentation", die ohne anwaltliche Prüfung nicht als Marketing-Versprechen stehen sollten.

**Betroffene Seiten und Korrekturen:**
- `index.html`: „lückenlose Dokumentation" → „strukturierte Dokumentation"
- `fuer-hausverwaltungen`: Statistik-Leiste „DSGVO / Konforme Dokumentation" → „Strukturiert / Dokumentierte Abläufe"
- `fuer-versicherungen`: Statistik-Leiste + Fließtext, mehrfache Korrekturen (DSGVO, lückenlos, rechtssicher)
- `fuer-sachverstaendige`: „sicher und lückenlos protokolliert" → „strukturiert und nachvollziehbar"
- `fuer-handwerker`: „lückenlose Dokumentation" → „vollständige Dokumentation"
- `malerarbeiten`: „lückenlose Dokumentation" → „strukturierte Dokumentation"

### 2.2 Demo-Zahlen / nicht verifizierbare Kennzahlen

**Problem:** `index.html` (Portal-Mockup in Hero-Sektion) zeigte „12 Aufträge" und „unter 24 Std." als konkrete Demo-Zahlen.

**Korrektur:**
- „12 Aufträge" → „Aktive Aufträge"
- „unter 24 Std." → „Strukturiert"

### 2.3 Google Fonts – externe Verbindung

**Problem:** `style.css` lud Schriftarten über `fonts.googleapis.com` – datenschutzrechtlich problematisch ohne Einwilligung.

**Korrektur:**
- 6 woff2-Dateien lokal heruntergeladen und in `/css/fonts/` abgelegt
- `@import`-URL in `style.css` durch lokale `@font-face`-Deklarationen ersetzt
- `datenschutz/index.html` Abschnitt 8 von „Google Fonts (extern)" auf „lokal ausgeliefert" umgeschrieben

### 2.4 Falsches Copyright-Jahr im Footer

**Problem:** Verschiedene Seiten hatten statisch „© 2024" oder „© 2025" – keine einheitliche Lösung.

**Korrektur:** `main.js` schreibt das aktuelle Jahr dynamisch per `new Date().getFullYear()` in `.footer__copy` – funktioniert auf allen Seiten zentral ohne manuelle Pflege.

### 2.5 Falsche Telefonnummer auf Schadensmeldung-Seite

**Problem:** Sidebar-Button auf `/schadensmeldung/` hatte Platzhalter-Nummer `+4920112345678` (fiktiv).

**Korrektur:** Ersetzt durch korrekte Nummer `+4920371496488`, Button-Text auf `„0203 71496488 anrufen"` gesetzt.

### 2.6 Fehlende Notfall-Hinweis im Formular-Bereich

**Problem:** Notfallhinweis war nur in der Sidebar sichtbar, nicht im primären Formular-Flow.

**Korrektur:** Orange Highlight-Box direkt unter dem Absenden-Button eingefügt mit Telefon-Link.

---

## 3. Geprüft und für korrekt befunden (keine Änderungen)

### Impressum
- Unternehmensname: Kundenwerk24 Balfanz & Rodenbach GbR ✓
- Adresse: Gottliebstr 70, 47166 Duisburg ✓
- Telefon: 0203 71496488 ✓
- E-Mail: info@kundenwerk24.de ✓
- Vertreten durch: Kevin Balfanz und Sebastian Rodenbach ✓
- Rechtsgrundlage: § 5 DDG (nicht TMG) ✓

### Portal-Darstellung
- Kein „Jetzt registrieren" oder offene Registrierung auf keiner Seite ✓
- Portal wird konsistent als einladungsbasiert / invite-only dargestellt ✓

### SEO-Seiten (7 geprüft)
Alle 7 Leistungsseiten haben:
- Aussagekräftigen `<title>` (B2B-Fokus: „für Hausverwaltungen und Versicherungen") ✓
- `<meta name="description">` mit Keyword und USP ✓
- Eindeutigen `<h1>` mit `aria-labelledby` ✓
- Keine problematischen Formulierungen ✓

### CSS-Klassen
- `.cards--2`, `.cards--3`, `.card__icon` in `style.css` definiert ✓
- `.benefit-card--dark` und Varianten definiert ✓
- `.nav__mobile-login` definiert ✓
- `.notice` (neu hinzugefügt) definiert ✓

---

## 4. Offene Punkte (kein Handlungsbedarf durch diese Prüfung, aber zu beachten)

Alle offenen rechtlichen und technischen Punkte sind in `LEGAL_TODOS.md` dokumentiert. Die wichtigsten:

1. **Netlify Forms AVV** – Auftragsverarbeitung mit Netlify für Formular-Daten muss abgeschlossen werden
2. **Portal Datenschutz** – Supabase, Auth, Dateiuploads, Rollen brauchen eine separate Datenschutzbetrachtung
3. **Impressum + Datenschutz** – finale anwaltliche Prüfung empfohlen vor Live-Gang
4. **Netlify Forms Benachrichtigungen** – Empfänger-E-Mail in Netlify-Dashboard noch nicht konfiguriert

---

## 5. Kein Deploy durchgeführt

Alle Änderungen sind ausschließlich lokal gespeichert unter:  
`/Users/kevinbalfanz/wir-machen-handwerk-webseite-neu/`

Kein Netlify-Deploy wurde ausgelöst. Die Live-URL  
`https://visionary-truffle-5da6b5.netlify.app` bzw. `https://www.wir-machen-handwerk.de`  
bleibt unverändert bis zu einer expliziten Freigabe.

---

## 6. Empfehlung vor Deploy

- [ ] LEGAL_TODOS.md durchgehen, offene Punkte klären oder bewusst zurückstellen
- [ ] Netlify Forms AVV abschließen
- [ ] Netlify-Dashboard: Formular-Benachrichtigungen einrichten (Empfänger für schadensmeldung + kontakt)
- [ ] Impressum und Datenschutzerklärung anwaltlich prüfen lassen
- [ ] Lokale Fonts im Browser testen (font-display: swap greift korrekt)
- [ ] Freigabe erteilen → dann `git push` / Netlify Deploy
