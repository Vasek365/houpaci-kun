# Samota u houpacího koně

Web pro ubytování a rekreační areál Samota u houpacího koně v Zhoři u Tábora.

## O webu
Statický HTML/CSS/JS web hostovaný na Vercel.

## Struktura
- `index.html` – hlavní stránka
- `svatby.html` – stránka svatby
- `firemni-akce.html` – teambuildingy a konference
- `terapie.html` – terapeutické pobyty
- `ubytovani.html` – ubytování
- `jirkova-doporuceni.html` – Jirkova doporučení (odkazy, texty). Odkaz jen nenápadně v patičce `index.html`, `noindex`, heslo „Jirka“ (jen JS závora – obsah je ve zdrojovém kódu, skutečně tajné věci sem nedávat). Nová položka = zkopírovat `<li>` v seznamu.
- `doporuceni/` – soubory k Jirkovým doporučením (plakát konference)
- `images/` – fotografie
- `media/` – video

## Deploy
Web se automaticky nasadí na Vercel po každém push do GitHub repozitáře.

## Kontakt
Jiří Návara · navara@houpacikun.com · +420 602 617 613

## Změny
- 1. 11. 2026 – Jirkova doporučení: heslo, 9 zajímavostí z Jirkových e-mailů a textů (rozbalovací, bez léčebných postupů), odkaz přesunut jen na úvodní stránku
- 1. 11. 2026 – nová stránka `jirkova-doporuceni.html`, odkaz v patičce všech stránek
