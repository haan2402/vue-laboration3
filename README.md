# Laboration 3
Denna uppgift är en applikation som är bygg med Vue.js där användaren kan hantera en lista med böcker. Den innehåller en lista med böcker där man kan se om en bok är läst eller inte, samt ett formulär där man enkelt kan lägga till nya böcker. Applikationen använder en REST-webbtjänst för att kunna hämta böcker, lägga till nya eller ta bort en bok. 

## Funktioner
- Visar en lista med tillagda böcker i form av en tabell
- Lägga till nya böcker via ett formulär
- Radera en bok från listan med en radera-knapp
- Visar om en bok är läst eller inte
- Komponentbaserad struktur
- Responsiv design
- SPA

## Tekniker
- **Vue**
- **Vue Router**
- **Fetch API**
- **HTML**
- **CSS**

## Struktur 
Projektet är uppdelad i olika komponenter och vyer för att skapa en bra struktur för koden:

- `startView.vue` - Visar startsidan med en banner och text
- `bookView.vue` - Sidan för hantering av böcker, tabell med böcker samt ett formulär för att lägga till. Importerar funktioner från komponenterna BookItem och AddBook.
- `infoView.vue` - Innehåller information om uppgiften och mina reflektioner om Vue
- `Header.vue` - Innehåller navigering och länkar mellan sidor
- `Footer.vue` - Innehåller sidfot med en enkel text
- `BookItem.vue` - En komponent som representerar en enskild bok i tabellen.
- `AddBook.vue` - Komponent för formuläret för att lägga till ny bok samt validering av inputfälten.

### Validering
För att kunna lägga till en ny bok så görs följande validering av fält:
- Titel på bok måste vara minst fyra tecken
- Författare måste vara minst fyra tecken
- År måste vara ett giltigt tal

Om valideringen inte godkänns så visas ett felmeddelande för användaren.


### Starta projekt

1. Installera beroenden: 
```
npm install
```

2. Starta utvecklingsservern
```
npm run dev
```

3. API körs på:
```
http://localhost:3000/books
```

### Av
Hanna Angeria, haan2402@student.miun.se 