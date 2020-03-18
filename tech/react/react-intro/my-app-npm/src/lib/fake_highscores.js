// Fake data - could come from a database or similar
const data = {
  userIdOne: {
    username: "jens",
    firstName: "Jens",
    lastName: "Hansen",
    scores: [
      { date: "2020-03-16T10:30:45", score: 7 },
      { date: "2020-03-16T12:30:45", score: 15 },
      { date: "2020-03-16T12:32:45", score: 10 },
    ]
  },
  userIdTwo: {
    username: "jj",
    firstName: "Jørgen",
    lastName: "Jyde",
    scores: [
      { date: "2020-03-16T11:30:42", score: 120 },
      { date: "2020-03-16T12:35:31", score: 12 },
      { date: "2020-03-16T12:37:20", score: 23 },
      { date: "2020-03-17T09:07:34", score: 17 },
      { date: "2020-03-17T09:31:10", score: 25 },
    ]
  },
  userIdThree: {
    username: "john",
    firstName: "John",
    lastName: "Doe",
    scores: [
      { date: "2020-03-16T10:57:45", score: 11 },
      { date: "2020-03-16T11:05:45", score: 8 },
      { date: "2020-03-16T11:21:12", score: 13 },
    ]
  }
};

export default data;