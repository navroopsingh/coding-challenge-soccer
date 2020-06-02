const getComparableWord = (word) => word.split(" ").join("").toLowerCase()
module.exports = (matchTeamPoints) => {
  const matchTeamPointsArr = []
  Object.keys(matchTeamPoints).forEach((key) => {
    matchTeamPointsArr.push({ team: key, points: matchTeamPoints[key] })
  })
  matchTeamPointsArr.sort(function (a, b) {
    if (a.points !== b.points) {
      return b.points - a.points
    } else {
      return getComparableWord(a.team) > getComparableWord(b.team) ? 1 : -1
    }
  })

  return matchTeamPointsArr.slice(0, 3)
}
