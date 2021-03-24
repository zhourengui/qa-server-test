const superagent = require("supertest")
const app = require("../../app")

describe("接口测试", function () {
  it("test接口测试", function (done) {
    superagent(app.listen())
      .get("/test")
      .expect(200)
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        err && done(err)
        let flag = false
        const dataKey = Object.keys(res.data)
        flag = !(dataKey.includes("payload") && dataKey.includes("code"))
        flag ? new Error("数据接口字段返回不准确") : done()
      })
  })
})
