const fs = require("fs")
const printResult = require("./printResult")
const assignTeamPoints = require("./assignTeamPoints")

try {
  // read contents of the file
  const data = fs.readFileSync("sample-input.txt", "UTF-8")

  const games = data.split(/\r?\n/)

  // This will store results for each Matchday
  const matches = []

  // A map of team name - points
  const matchTeamPoints = {}

  // A set of team names, used to identify new match day
  const matchDaySet = new Set()

  games.forEach((game) => {
    assignTeamPoints(game, matchTeamPoints, matches, matchDaySet)
  })
  printResult(matches, matchTeamPoints)
} catch (err) {
  console.error(err)
}
