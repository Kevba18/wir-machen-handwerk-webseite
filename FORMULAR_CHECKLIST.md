# Formular-Checkliste

Stand: Mai 2026

Diese Checkliste dokumentiert die öffentliche Website. Nach jedem Netlify-Deploy muss geprüft werden, ob Netlify beide Formulare erkannt hat und Formulareingänge korrekt gespeichert sowie per Benachrichtigung weitergeleitet werden.

## Kontaktaufnahme

- Name des Formulars: Kontaktaufnahme
- Route der Seite: `/kontakt/`
- Netlify Form Name: `kontaktaufnahme`
- Pflichtfelder: `anfrage_typ`, `vorname`, `nachname`, `email`, `nachricht`, `datenschutz`
- Empfänger E-Mail: TODO festlegen
- Teststatus: Lokal vorbereitet; nach Deploy in Netlify Forms prüfen
- Hinweis: Nach Deploy in Netlify prüfen, ob das Formular erkannt wurde, ein Testeintrag gespeichert wird und die Benachrichtigung an die vorgesehene E-Mail-Adresse ankommt.

## Schadensmeldung

- Name des Formulars: Schadensmeldung
- Route der Seite: `/schadensmeldung/`
- Netlify Form Name: `schadensmeldung`
- Pflichtfelder: `auftraggeber_typ`, `vorname`, `nachname`, `telefon`, `email`, `schadensart`, `objekt_adresse`, `beschreibung`, `datenschutz`
- Empfänger E-Mail: TODO festlegen
- Teststatus: Lokal vorbereitet; nach Deploy in Netlify Forms prüfen
- Hinweis: Nach Deploy in Netlify prüfen, ob das Formular erkannt wurde, ein Testeintrag gespeichert wird und die Benachrichtigung an die vorgesehene E-Mail-Adresse ankommt.
