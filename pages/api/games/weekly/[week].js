import { weeklyGamesRoute, getFetcher } from '../../../../utils'

export default async (req, res) => {
  const indexToSlice = req.url.lastIndexOf('/') + 1
  const weekNumber = req.url.slice(indexToSlice)
  const route = weeklyGamesRoute({
    seasonYear: 2019,
    seasonType: 'regular',
    weekNumber
  })
  const response = await getFetcher(route)
  res.end(JSON.stringify(response))
}
