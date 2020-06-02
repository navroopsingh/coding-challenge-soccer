module.exports = (matchTeamPoints) => {
  const matchTeamPointsArr = []
  Object.keys(matchTeamPoints).forEach((key) => {
    matchTeamPointsArr.push({ team: key, points: matchTeamPoints[key] })
  })
  matchTeamPointsArr.sort(function (a, b) {
    var teamA = a.team.split(" ").join("").toLowerCase()
    var teamB = b.team.split(" ").join("").toLowerCase()

    if (a.points !== b.points) {
      return b.points - a.points
    } else {
      return teamA > teamB ? 1 : -1
    }
  })
  return matchTeamPointsArr.slice(0, 3)
}
