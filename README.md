> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Fresk. Digital

Ik heb voor fresk.digital een overzicht gemaakt waar ze data kunnen bekijken van Google analytics. Ik heb een inlog-page, preface-page en een dashboard-page gemaakt.

<img width="1050" alt="Scherm­afbeelding 2024-06-19 om 10 37 46" src="https://github.com/lisavanmansom/proof-of-concept/assets/144007419/cb9ad0d3-bca6-4e7f-aea6-f0fb7fec9ad6">
<img width="1050" alt="Scherm­afbeelding 2024-06-19 om 10 33 00" src="https://github.com/lisavanmansom/proof-of-concept/assets/144007419/a6e7cfde-76ad-4886-877d-7b5d57848a0b">
<img width="1050" alt="Scherm­afbeelding 2024-06-19 om 10 40 07" src="https://github.com/lisavanmansom/proof-of-concept/assets/144007419/1ee07ab7-7af9-492b-ace5-15e4862b4c6e">

## Beschrijving
Vanuit de login-page kom je terecht bij de preface-page. Hierop is een preview van de data te zien, een uitgebreidere versie van deze data staat op de dashboard-page. Op de preface-page en dashboard-page zijn verschillende grafieken te zien die data tonen van Users. Ik heb de styleguide van fresk.digital geimplimenteerd in mijn design.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Tools](#tools)


## Kenmerken
Dit project is gemaakt met Node, Express, EJS. Voor de grafieken maak ik gebruik van chart.js.

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->

* npm install dotenv;
* Create a .env file in the root of your project (add the key in the .env file);
* Import and configure Dotenv (add this code in server.js -> import dotenv from "dotenv";dotenv.config());
* Add parsing.
* Daarna heb ik een het API QuickStart stappenplan gevolgd.
* Stap 1 en 2 zijn al gedaan dus die kon ik overslaan;

Configure authentication
* Voeg credential file toe (+ zet deze in de gitignore file)
* Add this line in the terminal (export GOOGLE_APPLICATION_CREDENTIALS="/credentials.json" -> example)
* Install the client library

Om dat te doen heb ik dit stappenplan gevolgd.
* Maak een bestand aan 'index.js';
* Voeg de code toe die in het voorbeeld staat; 
* Terug naar Configure autentication stappenplan;
* Bovenaan het bestand moet je het propertyID toevoegen

## Tools
 * VS code
 * render
### Gebruikte technieken
 * Express
 * Node
 * CSS, JS (chart.js)
 * Dotenv
 * EJS

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
