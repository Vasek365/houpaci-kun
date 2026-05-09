# Samota u houpacího koně – instrukce pro Claude

## Technologie
- Čistý HTML/CSS/JS, žádný framework ani build step
- Hostováno na Vercel, deploy přes GitHub (push = automatický deploy)

## Struktura souborů
- `index.html` – hlavní stránka
- `svatby.html`, `firemni-akce.html`, `terapie.html` – podstránky
- `images/` – fotografie
- `media/` – video soubory

## Pravidla při úpravách
- Nepoužívej žádné npm balíčky ani build nástroje
- Zachovej česky psaný obsah
- Nespouštěj žádné příkazy pro build – web je statický
- Po úpravách stačí git push, Vercel se postará o zbytek

## Deploy
```bash
git add .
git commit -m "popis změny"
git push
```
