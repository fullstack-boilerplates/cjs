const { hello } = require("../apis/hello")
  ;
(async () => alert(await hello('world')))()