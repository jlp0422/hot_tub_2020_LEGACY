import useSWR from 'swr'
import { fetcher, weeklyGamesRoute } from '../utils'

const Home = () => {
  const { data, error } = useSWR(
    weeklyGamesRoute({
      seasonYear: '2019',
      seasonType: 'regular',
      weekNumber: 4
    }),
    fetcher
  )
  if (!data) {
    return null
  }
  console.log(data)
  return <h2>{`Hello ${data.name}`}</h2>
}

export default Home
