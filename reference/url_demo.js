const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100 & status=active')

// Get the serialized url

consolelog(myUrl.href)