import express from 'express'

import fetch from 'node-fetch'

const app = express();

const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTczNjA5NDksImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2x2dzc2ejd0MDBhcTA3dXphaWpmdDEzbi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vIiwic3ViIjoiMDFlZTdhYmQtMGNiOC00ZDU2LTk2Y2ItNDhjNmY4MDJiMjBjIiwianRpIjoiY2x3eTBkOTZxMWpyczA3dzFocTZrY3pjZSJ9.qTeHq3SwGyH8maPdaYCtb68VGecAPOWMZEzJpezo0fxzBEzKHI0IecdSRRXskqYYT3qbkgMqTus9gQF_smxkTK2BMCpm8X62q0U2oTYGGYY6YphO7jxDK2nSk_N_sbx48NvpQCMUpkv3tH_A7je-gHXnROdzgqJFUrbEYsm5kI-Trqey3DsCKaW_HVKC59WsISXjkKirQkPWNpprDh_YKp8HepvN3g8UhHz4agrOlEDZRt0W9PG1OlSYTnOUOsuVHIyJbBiBE9xETCzso52OKRGY3Kt94xXo-9QhCpzvm9fXw2Ueee4g4av15UtoyG8pVoEG8Efbo43pZTdcFkdZMIs9e357CEQ-QmyPQi8yYFvXVr_gS1hPyNr79Da-7bnp_Yh-9QzbohdCkRtKDx3A_xmznVF2ub-Qwkg52VAF7uKP4AeKaQyqbzFwqK-pyZ8QtiPU98Rf8bHb20KaOJvx9OQqbkFll8zessoTa9xR2-0EuafRo9ZIcjPKjje4lklpSvRfVmsCfvPRF707TLHhPwuHwrsUNEZdeS4zhpxDanVqekMq78UkfCVHra1ADltt9s5-kBbMP59vajiwS8-aasLyF5giB-Rp-6wnKE6Xh7uqHw-tlIc5uvUpvhRsL1K4B14v9IlJrwF_9wlfdCho1U6GVk-bOyt-_3jKSkfyqAw'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 3000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function() {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

import { AwesomeGraphQLClient } from 'awesome-graphql-client';

const client = new AwesomeGraphQLClient({
  endpoint:'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clvw76z7t00aq07uzaijft13n/master',
  fetch,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

app.get('/', async function(request, response) {
    const employee = `{
        employees {
          sickdays
          name
          id
        }
      }`;
      const team = `{
        teams {
          name
          productivity
          employees {
            sickdays
            cupsOfCoffee
          }
        }
      }`;
    const {employees} = await client.request(employee);
    const {teams} = await client.request(team); 
    //console.log(teams[0].employees);
    response.render('index', {employees, teams});    
    // Pass the employees data to the view
});

app.get('/employees', async function(request, response) {
  const employee = `{
      employees {
        sickdays
        name
        productivity
        id
      }
    }`;

    const {employees} = await client.request(employee);
    response.render('employees', {employees}); 
  });