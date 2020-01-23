import { standingsRoute, getFetcher } from '../../../utils'

export default async (req, res) => {
  const route = standingsRoute({
    seasonYear: 2019,
    seasonType: 'regular'
  })
  const response = await getFetcher(route)
  res.end(JSON.stringify(response))
}
