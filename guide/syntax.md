# Markdown Syntax

Alle Folien der Präsentation sind in einer **einzelnen Markdown Datei** untergebracht (Standartweiße `./slides.md`).

Es können alle [Markdown Funktionen](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) wie normal genutzt werden. Zusätzlich können auch noch HTML und Vue Komponenten oder Styles mit der Hilfe von [Windi CSS](https://windicss.org) genutzt werden. Folien sind durch `---` zusammen mit einer neuen Zeile getrennt.

~~~md
# Slidev

Hallo, Welt!

---

# Folie 2

Codeblöcke zum direkten hervorheben verwenden

//```ts
console.log('Hallo, Welt!')
//```

---

# Folie 3

Nutze Windi CSS und Vue Komponenten um deine Folien zu stylen.

<div class="p-3">
  <Tweet id="20" />
</div>
~~~

## Titelseite & Layouts

Layouts und andere Metadaten können für Folien mit dem Umwandeln der Trennzeichen in [Frontmatter-Blöcke](https://jekyllrb.com/docs/front-matter/) angegeben werden. Jeder Frontmatter-Block startet  mit einem Dreifachstrich (`---`) und ended mit einem weiterem. Texte dazwischen sind Datenobjekte im [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/) Format. Zum Beispiel:

~~~md
---
layout: cover
---

# Slidev

Das ist die Titelseite.

---
layout: center
background: './images/background-1.png'
class: 'text-white'
---​

# Folie 2

Diese Folie hat ein layout `center` und ein Hintergrundbild.

---

# Folie 3

Das ist eine Standartfolie ohne weiteren Metadaten.
~~~

Schaue unter [Individualisierung](/custom/) für mehr Informationen nach.

## Codeblöcke

Ein großer Grund, warum ich Slidev entwickle, ist damit mein Code auf den Folien gut aussieht. So, wie erwartet, können Codeblöcke mit Markdown-Flavor genutzt werden, damit der Syntax ordentlich hervorgehoben wird.

~~~ts
//```ts
console.log('Hallo, Welt!')
//```
~~~

Wir unterstützen [Prism](http://prismjs.com) und [Shiki](https://github.com/shiki/shiki) zu Syntaxhervorhebung. Mehr Informationen gibt es im [Abschnitt Highlighters](/custom/highlighters).

### Zeilen Hervorhebung

Um bestimmte Zeilen im Code hervorzuheben, muss man nur die Zeilen, die hervorgehoben werden sollen, in geschwungenen Klammern (`{}`) notieren. Zeilen werden von 1 aufwärts gezählt.

~~~ts
//```ts {2,3}
function addiere(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

Um die Hervorhebung in mehreren Schritten zu änderen, können mehrere Angaben mit `|` getrennt angegeben werden. Zum Beispiel:

~~~ts
//```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

Hier wird zuerst `a: Ref<number> | number` und `b: Ref<number> | number`, einen Klick später `return computed(() => unref(a) + unref(b))` und nach dem letzten Klick wird der ganze Block hervorgehoben. Erfahre mehr über [Klicks und Animationen](/guide/animations).

### Monaco Editor

Wenn man Änderung am Code während der Präsentation machen möchte, kann der Monaco Editor genutzt werden. Ein einfaches `{monaco}` nach der Programmiersprache und der Codeblock wandelt sich in einen komplett ausgestatteten Monaco Editor um!

~~~ts
//```ts {monaco}
console.log('Hallo, Welt!')
//```
~~~

Wie man [Monaco konfiguriert](/custom/config-monaco).

## Embedded Styles

Man kann den `<style>` Tag nutzen, um direkt in der Markdowndatei Styles für die **aktuelle Folie** zu überschreiben.

```md
# Das ist Rot.

<style>
h1 {
  color: red
}
</style>

---

# Die nächste Folie wird nicht beeinflusst
```

Der `<style>` Tag ist immer [bereichsbezogen](https://vue-loader.vuejs.org/guide/scoped-css.html). Mehr über das Überschreiben von globalen Styles gibt es im Abschnitt [Individualisierung](/custom/directory-structure#style).


Durch [Windi CSS](https://windicss.org), kann dirket verschachteltes CSS oder [Direktiven](https://windicss.org/features/directives.html) (z.B. `@apply`) genutzt werden.

```md
# Slidev

> Hallo, `Welt!`

<style>
blockquote {
  code {
    @apply text-teal-500 dark:text-teal-400;
  }
}
</style>
```

## Statische Assets

Wie man es auch in Markdown machen würde, kann man Bilder mit der Hilfe von remoten oder lokalen Urls definieren.

Für remote Assets kann man das integrierte [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) Plugin nutzten. Dieses Plugin speichert Bilder direkt auf der Festplatte, sodass selbst große Bilder später in der Präsentation sofort laden.

```md
![Remotes Bild](https://sli.dev/favicon.png)
```

Lokale Assets können direkt im [`public` Ordner](/custom/directory-structure.html#public) abgelegt werden und mit **führendem Schrägstrich** genutzt werden.

```md
![Lokales Bild](/pic.png)
```

Falls man eigene Styles auf Bilder anwenden möchte, kann man den Markdown in einen `<img>` Tag umwandeln.

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```

## Notizen

Für jede Folie kann man Notizen anlegen. Diese erscheinen dann im [Moderatoren Modus](/guide/presenter-mode), damit man sie in den Präsentationen nutzen kann.

In Markdown wird der letzte Kommentar in einer Folie in eine Notiz umgewandelt.

~~~md
---
layout: cover
---

# Folie 1

Das ist die Titelseite.

<!-- Das ist eine Notiz -->

---

# Folie 2

<!-- Das ist keine Notiz, weil es vor dem Inhalt der Folie steht  -->

Die 2. Folie

<!--
Das ist eine weitere Notiz
-->
~~~

## Icons

In Slidev können fast alle Open-Source Inconsets dank [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) und [Iconify](https://iconify.design/) **direkt** in der Markdown Datei genutzt werden. 

Die Benenung folgt den [Iconify](https://iconify.design/) Namenskonventionen `{iconset-name}-{icon-name}`. Zum Beispiel:

- `<mdi-account-circle />` - <mdi-account-circle /> von [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> von [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> von [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> von [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> von [SVG Logos](https://github.com/gilbarbara/logos)
- Und viele mehr...

Alle verfügbaren Icons können mit [Icônes](https://icones.js.org/) durchsucht werden.

### Icons stylen

Icons können genau, wie alle anderen HTML Elemente gestylt werden:

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />

## Slots

> Verfügbar seit v0.18

Einige Layouts können mithilfe von [Vue's benannten Slots](https://v3.vuejs.org/guide/component-slots.html) mehrere Basispunkte bereitstellen.

Zum Beispiel, im [`two-cols` Layout](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue) hat man zwei Spalten, links (`default` Slot) und rechts (`right` slot), nebeneinander.

```md
---
layout: two-cols
---

<template v-slot:default>

# Links

Dieser Text steht links

</template>
<template v-slot:right>

# Rechts

Dieser Text steht rechts

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>Links</h3>
<p>Dieser Text steht links</p>
</div>
<div>
<h3>Rechts</h3>
<p>Dieser Text steht rechts</p>
</div>
</div>

Wir bieten außerdem abgekürzten Syntax Zucker `::name::` für Slot Namen. Das folgende Beispiel funktioniert genau das wie das letzte.

```md
---
layout: two-cols
---

# Links

Dieser Text steht links

::right::

# Rechts

Dieser Text steht rechts
```

Der Standart-Slot kann explizit und in eigener Reihenfolge angegeben werden

```md
---
layout: two-cols
---

::right::

# Rechts

Dieser Text steht rechts

::default::

# Links

Dieser Text steht links
```

## Konfigurationen

Alle benötigten Konfigurationen können in der Markdown Datei definiert werden. Zum Beispiel:

```md
---
theme: seriph
layout: cover
background: 'https://source.unsplash.com/1600x900/?nature,water'
---

# Slidev

Das ist die Titelfolie.
```

Erfahre mehr über [Frontmatter-Konfigurationen](/custom/#frontmatter-configures).

## LaTeX

Slidev kommt mit out-of-box LaTeX Unterstützung von [KaTeX](https://katex.org/).

<Tweet id="1392246507793915904" />

### Inline

Umgebe den LaTeX Syntax mit einem einzelnen `$` auf jeder Seite für das rendern in der Zeile.

```md
$\sqrt{3x-1}+(1+x)^2$
```

### Block

Nutze zwei (`$$`) für das Rendern im Block. Dieser Modus nutzt größere Symbole und zentriert den Text.

```md
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$
```

Erfahre mehr: [Demo](https://sli.dev/demo/starter/8) | [KaTeX](https://katex.org/) | [`markdown-it-katex`](https://github.com/waylonflinn/markdown-it-katex)

## Diagramme

Man kann außerdem Diagramme / Graphen aus Textbeschreibungen in der Markdowndatei mit der Hilfe von [Mermaid](https://mermaid-js.github.io/mermaid) erstellen. 

Codeblöcke, welche mit `mermaid` markiert sind, werden in Diagramme umgewandelt:

~~~md
//```mermaid
sequenceDiagram
  Alice->John: Hallo John, wie geht es dir?
  Note over Alice,John: Eine typische Konversation.
//```
~~~

Des Weiteren kann ein Objekt übergeben werden, dass Optionen wie Skalierung oder Themierung definiert. Der Syntax dieses Objekts ist ein Javascript-Objektliteral. Für String müssen Anführungszeichen (`'`) genutzt werden und Kommas (`,`) zwischen Keys.  

~~~md
//```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Entscheidung}
C -->|Eins| D[Ergebnis 1]
C -->|Zwei| E[Ergebnis 2]
//```
~~~

Erfahre mehr: [Demo](https://sli.dev/demo/starter/9) | [Mermaid](https://mermaid-js.github.io/mermaid)

## Mehrere Dateien

> Verfügbar seit v0.15

Man kann die Hauptdatei (`slides.md`) in mehrere Dateien aufteilen.

`slides.md` :

```md
# Folie 1

Das ist eine normale Folie.

---
src: ./subpage2.md
---

<!-- Diese Folie wird von './subpage2.md' geladen. -->
geschriebene Inhalte werden ignoriert
```

`subpage2.md` :

```md
# Folie 2

Diese Folie ist von einer anderen Datei
```

### Frontmatter Zusammenführung

Man kann Formatter von der Hauptdatei oder anderen Markdownseiten nutzen. Falls mehrere gleiche Attribute enthalten sind, werden die Attribute der **Einstiegsdatei** genutzt, da diese immer die **höhere Priorität** hat. Zum Beispiel:

`slides.md` :

```md
---
src: ./cover.md
background: https://sli.dev/bar.png
class: text-center
---
```

`cover.md` :

```md
---
layout: cover
background: https://sli.dev/foo.png
---

# Titelseite

Titelseite
```

Diesen Folien werden genau, wie die folgenden Aussehen:

```md
---
layout: cover
background: https://sli.dev/bar.png
class: text-center
---

# Titelseite

Titelseite
```

### Folienwiederverwendung

Mit Mehrfach-Eintrag Unterstützung ist das Wiederverwenden von Folien super einfach:

```yaml
---
src: ./cover.md
---

---
src: ./intro.md
---

---
src: ./content.md
---

---
# Wiederverwenden
src: ./content.md
---
```
