import dotenv from "dotenv";
dotenv.config()
console.log(process.env.PRIVATE_KEY)


// 1. Opzetten van de webserver
import express from 'express'
import fetchJson from './helpers/fetch-json.js'


// Import the Google Analytics Data API client library.
const propertyId = '301922918';
import {BetaAnalyticsDataClient} from '@google-analytics/data';
const analyticsDataClient = new BetaAnalyticsDataClient();


// Maak een nieuwe express app aan
const app = express()
// Stel ejs in als template engine
app.set('view engine', 'ejs')
// Stel de map met ejs templates in
app.set('views', './views')
// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))
// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({ extended: true }))


// Routes and data
// GET route for the index page
app.get('/', function (request, response) {
  response.render('index');
});

// GET route voor de preface
app.get('/preface', async function (request, response) {
  const [apiAchievement] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,

    // data total users per hour 
    dateRanges: [{ startDate: '2024-06-01',
                   endDate: 'today',
                  },],

    dimensions: [{ name: 'hour', },],

    metrics: [{    name: 'totalUsers', },], 

  });

  const [apiUsers] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,

    // data total users per hour 
    dateRanges: [{ startDate: '2024-06-01',
                   endDate: 'today',
                  },],

    dimensions: [{ name: 'hour', },],

    metrics: [{    name: 'activeUsers', },], 

  });

  const [apiNewUser] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,

    // data total users per hour 
    dateRanges: [{ startDate: '2024-06-01',
                   endDate: 'today',
                  },],

    dimensions: [{ name: 'hour', },],

    metrics: [{    name: 'newUsers', },], 

  });

  response.render('preface', {
    achievement: apiAchievement,
    users: apiUsers,
    newuser: apiNewUser})
})

// Route for the dashboard page
app.get('/dashboard', async function (request, response) {
  const [apiSessions] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,

    // data active users firstsessions 
    dateRanges: [{ startDate: '2023-06-01',
                   endDate: 'today',
                   },],

    dimensions: [{ name: 'firstSessionDate', },],

    metrics: [{    name: 'activeUsers', },],

  });
  
  const [apiContinent] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    
    // data active users per continent 
    dateRanges: [{ startDate: '2023-06-01',
                   endDate: 'today', },],

    dimensions: [{ name: 'continent', },],

    metrics: [{    name: 'activeUsers', },],

  });

  const [apiCountry] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,

    // data active users per country 
    dateRanges: [{ startDate: '2021-06-01',
                   endDate: 'today', },],

    dimensions: [{ name: 'country', },],

    metrics: [{    name: 'activeUsers', },],

  });

  const [apiCity] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    // data active users per city 

    dateRanges: [{ startDate: '2023-06-01',
                   endDate: 'today', },],

    dimensions: [{ name: 'city', },],

    metrics: [{   name: 'activeUsers', },],

  });

  const [apiGoogleAd] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    // data active users per city 

    dateRanges: [{ startDate: '2023-06-01',
                   endDate: 'today', },],

    dimensions: [{ name: 'sessionGoogleAdsAdGroupId', },],

    metrics: [{   name: 'activeUsers', },],

  });

  const [apiBrowser] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    // data active users per city 

    dateRanges: [{ startDate: '2023-06-01',
                   endDate: 'today', },],

    dimensions: [{ name: 'browser', },],

    metrics: [{   name: 'activeUsers', },],

  });

  response.render('dashboard', {
    session: apiSessions,
    continent : apiContinent,
    country : apiCountry,
    city : apiCity,
    browser: apiBrowser,
    googleAd: apiGoogleAd
  })
})


// Stel het portnummer in waar express op moet gaan 
app.set('port', process.env.PORT || 8000)
// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
