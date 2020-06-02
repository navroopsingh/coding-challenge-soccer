module.exports = {
  initMatchTeamPoints: (matchTeamPoints, team) => {
    if (!matchTeamPoints[team]) matchTeamPoints[team] = 0
  },
}
