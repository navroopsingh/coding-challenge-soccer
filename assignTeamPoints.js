const printResult = require("./printResult"),
  { initMatchTeamPoints } = require("./util")

module.exports = (game, matchTeamPoints, matches, matchDaySet) => {
  const teamScores = game.split(",")
  let lastTeamScore, lastTeam
  teamScores.forEach((teamScore) => {
    const parts = teamScore.split(" ")
    const team = parts
      .slice(0, parts.length - 1)
      .join(" ")
      .trim()
    if (matchDaySet.has(team)) {
      printResult(matches, matchTeamPoints)
      matchDaySet.clear()
    }
    matchDaySet.add(team)
    initMatchTeamPoints(matchTeamPoints, team)
    const score = parts[parts.length - 1]
    if (lastTeamScore) {
      if (score > lastTeamScore) {
        matchTeamPoints[team] += 3
      } else if (score == lastTeamScore) {
        matchTeamPoints[team] += 1
        matchTeamPoints[lastTeam] += 1
      } else if (score < lastTeamScore) {
        matchTeamPoints[lastTeam] += 3
      }
    } else {
      lastTeamScore = score
      lastTeam = team
    }
  })
}
