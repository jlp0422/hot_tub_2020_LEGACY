import axios from 'axios'
import btoa from 'btoa'

const header = `${process.env.MY_SPORTS_FEEDS_API_KEY}:${process.env.MY_SPORTS_FEEDS_API_PASSWORD}`

export const myAxios = axios.create({
  headers: {
    Authorization: `Basic ${btoa(header)}`
  }
})

export const fetcher = async path => {
  const res = await myAxios.get(path)
  return res.data
}

export const weeklyGamesRoute = ({ seasonYear, seasonType, weekNumber }) =>
  `https://api.mysportsfeeds.com/v2.1/pull/nfl/${seasonYear}-${seasonType}/week/${weekNumber}/games.json`
