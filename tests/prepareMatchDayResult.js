const assert = require("assert")
const prepareMatchDayResult = require("../prepareMatchDayResult")

describe("prepareMatchDayResult", function () {
  it("returns the correct output", function () {
    const matchTeamPoints = {
      "San Jose Earthquakes": 2,
      "Santa Cruz Slugs": 3,
      "Capitola Seahorses": 5,
      "Aptos FC": 9,
      "Felton Lumberjacks": 7,
      "Monterey United": 6,
    }

    assert.deepEqual(prepareMatchDayResult(matchTeamPoints), [
      { team: "Aptos FC", points: 9 },
      { team: "Felton Lumberjacks", points: 7 },
      { team: "Monterey United", points: 6 },
    ])
  })
})
