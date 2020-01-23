const axios = require('axios')
const btoa = require('btoa')

const header = `${process.env.MY_SPORTS_FEEDS_API_KEY}:${process.env.MY_SPORTS_FEEDS_API_PASSWORD}`

const myAxios = axios.create({
  headers: {
    Authorization: `Basic ${btoa(header)}`
  }
})

const allFetcher = async (method, path, options = {}) => {
  const response = await myAxios[method](path, options)
  return response.data
}

const getFetcher = async path => {
  const res = await myAxios.get(path)
  return res.data
}

const postFetcher = async (path, options) => {
  const res = await myAxios.post(path, options)
  return res.data
}

const weeklyGamesRoute = ({ seasonYear, seasonType, weekNumber }) =>
  `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/week/${weekNumber}/games.json`

const seasonalGamesRoute = ({ seasonYear, seasonType, teams = '' }) => {
  const teamsParam = teams.length ? `?team=${teams}` : ''
  return `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/games.json${teamsParam}`
}

const standingsRoute = ({ seasonYear, seasonType, stats = 'wins' }) =>
  `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/standings.json?stats=${stats}`

module.exports = {
  weeklyGamesRoute,
  seasonalGamesRoute,
  standingsRoute,
  myAxios,
  getFetcher,
  postFetcher
}
