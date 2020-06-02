const prepareMatchDayResult = require("./prepareMatchDayResult")
module.exports = (matches, matchTeamPoints) => {
  const results = prepareMatchDayResult(matchTeamPoints)
  matches.push(results)
  console.log(`Matchday ${matches.length}`)
  results.forEach((result) => {
    console.log(`${result.team}, ${result.points} pts`)
  })
  console.log()
}
