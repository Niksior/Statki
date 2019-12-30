# Statki

## Changelog
30.12.2019:
- Dodane zostało od cholery klas
- W przypadku dodania nowej sugerować się screenem `suggestion.png`
- Należy dodać obsługę planszy poprzez narysowanie klas pól typu `Field`
- Klasa typu `Sheip` musi rozszerzeać typ `Field`
- Tak, zwalone jest wczytywanie z local storage do klasy, dlatego doobiłem wczytywacz dla ustawień
* Resztę ogarniesz w kodzie
* Klasa `ShipOld` została tylko na chwilę, ! do wywalenia jest !

![Suggestion](suggestion.png)
## Klasy:
plansza:
Parametry: rozmiar pola, typ i ilość statków, ilość "żywych" statków, manualne rozmieszczenie/auto,
	 przy manualnym (drag and drop?), statystyka strzałów

akcje na planszy: Klikniecie na guzik(onClick: sprawdzenie czy jest tam statek, jaki typ, pozostałe życie - wykonanie akcji:
	Traf/Zatop/Pudło - zmiana koloru zależnie od akcji, disablowanie guzika, dodanie do statystyki(ilosc strzałów, ilość nietrafionych)
 opcjonalnie: ustawianie statku: onClick:pierwsze i ostatnie pole?

Statek: id, typ, ilość trafień max/aktualne

Logika: Generowana jest plansza z podanym rozmiarem i ilością statków, statki są rozmieszczane (id statku przypisane do odp. guzików)
	Rozpoczęcie gry. Użytkownik klika na guzik, w momencie kliknięcia wykonywana jest akcja strzał i sprawdzone czy trafione.
	Jeżeli statek o podanym id ma aktualną ilość trafeń == max, zostaje zatopiony. Jeżeli nie, trafiony.
	Po zatopieniu odejmujemy liczbę "żywych" statków i sprawdzamy czy jakieś jeszcze zostały. Jeżeli nie, koniec gry.
	
Komponenty: Start: przyjmuje dane wejściowe na temat planszy,statków
            board: reprezentuje mapę gry, na niej umieszczamy statki
            statek?




# Statki

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
