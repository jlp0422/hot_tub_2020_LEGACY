import { seasonalGamesRoute, getFetcher } from '../../../../utils'

export default async (req, res) => {
  const [_, teams] = req.url.split('=')
  const route = seasonalGamesRoute({
    seasonYear: 2019,
    seasonType: 'regular',
    teams
  })
  const response = await getFetcher(route)
  res.end(JSON.stringify(response))
}
