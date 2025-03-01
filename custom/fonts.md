# Schriftarten

> Verfügbar seit v0.20

Während man HTML und CSS verwenden kann, um die Schriftarten und den Stil der Folien nach Belieben anzupassen, bietet Slidev auch eine bequeme Möglichkeit, Schriftarten und Stile mühelos zu verwenden.

Konfiguriere den Fontmatter wie folgt:

```yaml
---
fonts:
  # grundsätzlicher Text
  sans: 'Robot'
  # Verwendung mit `font-serif` css-Klasse aus windicss
  serif: 'Robot Slab'
  # für Code-Blöcke, Inline-Code, etc.
  mono: 'Fira Code'
---
```

Und das ist alles.

Schriftarten werden **automatisch von [Google Fonts](https://fonts.google.com/)** importiert. Das heißt, man kann alle bei Google Fonts verfügbaren Schriftarten direkt verwenden.

## Lokale Schriftarten

Standardmäßig nimmt Slidev an, dass alle über die `fonts`-Konfigurationen angegebenen Schriftarten von Google Fonts stammen. Wenn man lokale Schriftarten verwenden möchte, gibt man `fonts.local` an, um den Auto-Import zu deaktivieren. 

```yaml
---
fonts:
  # wie font-family in css kann ein Komma (`,`) genutzt werden um Fallback Schriftarten anzugeben
  sans: 'Helvetica Neue,Robot'
  # "Helvetica Neue" als lokale Schrift markieren
  local: 'Helvetica Neue'
---
```

## Gewichte & Kursivschrift

Standardmäßig importiert Slidev drei Gewichte `200`,`400`,`600` für jede Schriftart. Man kann diese konfigurieren, indem man:

```yaml
---
fonts:
  sans: 'Robot'
  # Standart
  weights: '200,400,600'
  # importiere kursive Schriftarten, Voreinstellung `false`
  italic: false
---
```

Diese Konfiguration gilt für alle Webfonts. Für eine feinere Steurung der Gewichte, müssen diese manuell mit [HTML](/custom/directory-structure.html#index-html) und CSS importiert werden.

## Fallback Schriftarten

Für die meisten Szenarien muss man nur die "spezielle Schriftart" angeben, und Slidev fügt die Fallback-Schriften automatisch dazu, zum Beispiel:

```yaml
---
fonts:
  sans: 'Robot'
  serif: 'Robot Slab'
  mono: 'Fira Code'
---
```

wird

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

Wenn man die Fallback-Schriftarten deaktivieren möchte, muss das ganze wie folgt Konfiguriert werden:

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallback: false
---
```

## Anbieter

- Optionen: `google` | `none`
- Stadart: `google`

Derzeit wird nur Google Fonts unterstützt, es ist geplant, in Zukunft weitere Anbieter hinzuzufügen. Mit der Angabe "none" wird die Funktion des automatischen Imports vollständig deaktiviert und alle Schriften werden lokal behandelt.

```yaml
---
fonts:
  provide: 'none'
---
```


