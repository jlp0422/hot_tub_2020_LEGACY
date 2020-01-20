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

module.exports = {
  weeklyGamesRoute,
  myAxios,
  fetcher
}
