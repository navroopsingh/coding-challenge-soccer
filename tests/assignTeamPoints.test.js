const assert = require("assert")
const assignTeamPoints = require("../assignTeamPoints")

describe("assignTeamPoints", function () {
  it("builds matchTeamPoints correctly for draw game", function () {
    const matchTeamPoints = {}
    const matches = []
    const matchDaySet = new Set()
    const game = "San Jose Earthquakes 3, Santa Cruz Slugs 3"
    assignTeamPoints(game, matchTeamPoints, matches, matchDaySet)
    assert.deepEqual(matchTeamPoints, {
      "San Jose Earthquakes": 1,
      "Santa Cruz Slugs": 1,
    })
  })

  it("builds matchTeamPoints correctly for winning game", function () {
    const matchTeamPoints = {}
    const matches = []
    const matchDaySet = new Set()
    const game = "San Jose Earthquakes 3, Santa Cruz Slugs 1"
    assignTeamPoints(game, matchTeamPoints, matches, matchDaySet)
    assert.deepEqual(matchTeamPoints, {
      "San Jose Earthquakes": 3,
      "Santa Cruz Slugs": 0,
    })
  })

  it("builds matchDaySet correctly", function () {
    const matchTeamPoints = {}
    const matches = []
    const matchDaySet = new Set()
    const game = "San Jose Earthquakes 3, Santa Cruz Slugs 3"
    assignTeamPoints(game, matchTeamPoints, matches, matchDaySet)
    assert.deepEqual(Array.from(matchDaySet), [
      "San Jose Earthquakes",
      "Santa Cruz Slugs",
    ])
  })

  it("builds matches correctly", function () {
    const matchTeamPoints = {}
    const matches = []
    const matchDaySet = new Set()
    const games = [
      "San Jose Earthquakes 3, Santa Cruz Slugs 3",
      "Capitola Seahorses 1, Aptos FC 0",
      "Felton Lumberjacks 2, Monterey United 0",
      "Felton Lumberjacks 1, Aptos FC 2",
    ]

    games.forEach((game) =>
      assignTeamPoints(game, matchTeamPoints, matches, matchDaySet)
    )

    assert.deepEqual(matches, [
      [
        {
          points: 3,
          team: "Capitola Seahorses",
        },
        {
          points: 3,
          team: "Felton Lumberjacks",
        },
        {
          points: 1,
          team: "San Jose Earthquakes",
        },
      ],
    ])
  })
})
