const { weeklyGamesRoute } = require('./utils')

describe('weeklyGamesRoute', () => {
  test('returns a stringified version of the params', () => {
    expect(
      weeklyGamesRoute({
        seasonYear: '2019',
        seasonType: 'regular',
        weekNumber: 12
      })
    ).toBe(
      `https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-regular/week/12/games.json`
    )
  })
})
