import useSWR from 'swr'
import { getFetcher } from '../utils'

const Home = () => {
  const { data, error } = useSWR('/api/games/seasonal?team=MIA', getFetcher)
  console.log('data', data)
  return <h2>Hello</h2>
}

export default Home
