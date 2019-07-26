## Bewertung

60% Code
40% Doku

#### Doku

- Paper Prototypes 
- Kommentare im Code
- Klassendiagramm (keine gültige UML Syntax; nur das grobe Konzept)
- Text
  - Requirements
  - Konzept
  - Abschluss

#### Code

- sinnvolle Struktur (Components, Services, Ordner, ...)
- Angular Material verwenden
- "arbeite so, dass man sieht, du hast auch mal mit CSS gearbeitet - #FarbeÄndern reicht"
- Services für Daten verwenden - man muss kein Firebase anbinden
- one-way binding und two-way binding verwenden
- ng-For verwenden anstelle von 1000 Einträgen von Hand
- ng-if verwenden anstelle von z.B. visible Attributen im DOM
- keine DOM-Manipulation
- Observable verwenden
- Kommentare (wenn der Code sich selbst erklärt, braucht es keine Kommentare)
- vorgestellte Hilfsmittel verwenden (siehe Beispielprojekt Dozent)
- kein Spaghetti-Code -> verständlicher, aufgeräumter Code
- Funktionalität (wichtig!!!) - falls es nicht funktioniert, googlen, Fehleranalyse und Ideen       anfügen wie es gehen könnte

#### Abgabe

- Abgabe über GitHub
- es muss nachvollziehbar sein, dass das Projekt Stück für Stück gewachsen ist (nicht nur ein       Commit)
- auch die Doku über GitHub abgeben

## Projekt - Rezeptbuch

1) Übersicht Rezepte
   1) + fügt ein neues Rezept hinzu (Foto, Name, Zubereitung)
      1) Foto anfügen mit Link auf ein Google Foto
   2) der Einkaufsliste hinzufügen fügt alle Zutaten des Rezepts hinzu
2) Klick auf Rezept öffnet Detailansicht (als View / Component) des Rezepts
   1) Zutaten (Referenz -> Zutaten liegen in einem Array; Dropdown Anzeige, wo die Zutaten angezeigt und ausgewählt werden können - ist es nicht vorhanden kann eine neue Zutat dem Array hinzugefügt werden): Name, Anzahl, Kategorie
   2) Zubereitung
   3) Foto
   4) der Einkaufsliste hinzufügen
3) Einkaufsliste (als View / Component) kategorisieren über Kategorie der Zutaten (Obst, ...)
4) Zutatenliste als eigene View / Componente
   1) neue Zutat hinzufügen

zwei Datenservices anlegen (eine für die Zutaten, eine für die Einkaufsliste)