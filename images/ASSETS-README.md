# WMH Website – Asset-Slots

Hier werden alle Bilder und Assets eingebunden. Ersetze die Platzhalter durch finale Dateien.

## Logo
| Slot | Pfad | Beschreibung |
|---|---|---|
| Logo (hell/dunkel) | `/images/logo/logo.svg` | SVG-Logo für Header auf weißem Hintergrund |
| Logo (weiß) | `/images/logo/logo-white.svg` | Weißes Logo für dunkle Hintergründe |
| Logo (PNG Fallback) | `/images/logo/logo.png` | PNG, min. 400px breit, 2x @retina |
| Favicon | `/images/logo/favicon.png` | 32×32px und 192×192px |

## Portal Screenshots
| Slot | Pfad | Beschreibung |
|---|---|---|
| Dashboard | `/images/portal/dashboard.png` | Dashboard-Übersicht, min. 1200px breit |
| Auftragsübersicht | `/images/portal/auftraege.png` | Auftragsliste / Kanban-Ansicht |
| Objektverwaltung | `/images/portal/objekte.png` | Partner- oder Objektansicht |
| Dokumentenansicht | `/images/portal/dokumente.png` | Dokumenten-Upload und Vorschau |
| Statusübersicht | `/images/portal/status.png` | Timeline oder Statusverlauf eines Falls |
| Handwerker-Ansicht | `/images/portal/handwerker-portal.png` | Portal-Ansicht für Handwerkerbetriebe |
| Partner-Ansicht | `/images/portal/partner-portal.png` | Portal-Ansicht für Hausverwaltungen |

## Website-Bilder
| Slot | Pfad | Beschreibung |
|---|---|---|
| Hero-Bild | `/images/website/hero.jpg` | Hintergrundbild Hero (1920×1080px) |
| Gebäude 1 | `/images/website/gebaeude-1.jpg` | Mehrfamilienhaus, modern, aufgeräumt |
| Gebäude 2 | `/images/website/gebaeude-2.jpg` | Wohnobjekt oder Gewerbeimmobilie |
| Handwerk 1 | `/images/website/handwerk-1.jpg` | Handwerker bei der Arbeit, professionell |
| Handwerk 2 | `/images/website/handwerk-2.jpg` | Sanierung oder Schadensfall |
| Tablet-Nutzung | `/images/website/tablet.jpg` | Person mit Tablet / Laptop, Portal-Nutzung |
| Zusammenarbeit | `/images/website/team.jpg` | Handwerker + Verwalter vor Ort |
| Schadensfall | `/images/website/schaden.jpg` | Wasserschaden oder Renovierungsfall |

## Einbindung im Code

Wenn finale Bilder vorliegen, ersetze die `.img-placeholder`-Divs in den HTML-Dateien:

```html
<!-- Placeholder (aktuell) -->
<div class="img-placeholder" style="height:400px">
  <div class="img-placeholder__label">
    Hero-Bild
    <code>/images/website/hero.jpg</code>
  </div>
</div>

<!-- Ersatz mit echtem Bild -->
<img src="/images/website/hero.jpg" alt="..." loading="lazy">
```

Für Portal-Screenshots:
```html
<!-- Placeholder -->
<div class="portal-screenshot-slot" data-src="/images/portal/dashboard.png">
  ...
</div>

<!-- Mit echtem Screenshot -->
<img src="/images/portal/dashboard.png" alt="WMH Portal Dashboard" loading="lazy">
```
