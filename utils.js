const axios = require('axios')
const btoa = require('btoa')

const header = `${process.env.MY_SPORTS_FEEDS_API_KEY}:${process.env.MY_SPORTS_FEEDS_API_PASSWORD}`

const myAxios = axios.create({
  headers: {
    Authorization: `Basic ${btoa(header)}`
  }
})

const fetcher = async path => {
  const res = await myAxios.get(path)
  return res.data
}

const weeklyGamesRoute = ({ seasonYear, seasonType, weekNumber }) =>
  `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/week/${weekNumber}/games.json`

const seasonalGamesRoute = ({ seasonYear, seasonType, teams }) => {
  const finalTeams = teams || []
  const teamsParam = finalTeams.length ? `?team=${teams.join(',')}` : ''
  return `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/games.json${teamsParam}`
}

const standingsRoute = ({ seasonYear, seasonType, stats = 'wins' }) =>
  `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/standings.json?stats=${stats}`

module.exports = {
  weeklyGamesRoute,
  seasonalGamesRoute,
  standingsRoute,
  myAxios,
  fetcher
}
