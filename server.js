const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  
  server.get('/home', (req, res) => {
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    let actualPage = '/home/home'
    let queryParams = {'Message':'登录成功.','authkey':cookieObject['authkey']}
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/personcenter', (req, res) => {
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    let actualPage = '/home/PersonCenter/personCenter'
    let queryParams = {'Message':'登录成功.','authkey':cookieObject['authkey']}
    if(cookieObject[' authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }else if(cookieObject['authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/assignment', (req, res) => {
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    let actualPage = '/assignment/assignment'
    let queryParams = {'Message':'登录成功.','authkey':cookieObject['authkey']}
    if(cookieObject[' authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }else if(cookieObject['authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/assignment/coding', (req, res) => {
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    let actualPage = `/assignment/pages/assignmentCoding/pages/codingHome`;
    let queryParams = {'Message':'登录成功.','authkey':cookieObject['authkey']};
    if(cookieObject[' authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }else if(cookieObject['authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/assignment/question', (req, res) => {
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    let actualPage = `/assignment/pages/assignmentCoding/pages/codingDetail`;
    let queryParams = {'Message':'登录成功.','authkey':cookieObject['authkey']}
    if(cookieObject[' authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }else if(cookieObject['authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/competition', (req, res) => {
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    console.log(cookieObject)
    let actualPage = '/competition/competition'
    let queryParams = {'Message':'登录成功.','authkey':cookieObject['authkey']}
    if(cookieObject[' authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }else if(cookieObject['authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/competition/Arena', (req, res) => {
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    let actualPage = '/competition/competitionArena/competitionArena'
    let queryParams = {'Message':'登录成功.','authkey':cookieObject['authkey']}
    if(cookieObject[' authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }else if(cookieObject['authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/management', (req, res) => {
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    let actualPage = '/management/management'
    let queryParams = {'Message':'登录成功.','authkey':cookieObject['authkey']}
    if(cookieObject[' authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }else if(cookieObject['authkey']==''){
      actualPage = '/home/home'
      queryParams = {'Message':'请登录后再进行操作.'}
    }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log([

        "                   _ooOoo_",
        "                  o8888888o",
        "                  88\" . \"88",
        "                  (| -_- |)",
        "                  O\\  =  /O",
        "               ____/`---'\\____",
        "             .'  \\\\|     |//  `.",
        "            /  \\\\|||  :  |||//  \\",
        "           /  _||||| -:- |||||-  \\",
        "           |   | \\\\\\  -  /// |   |",
        "           | \\_|  ''\\---/''  |   |",
        "           \\  .-\\__  `-`  ___/-. /",
        "         ___`. .'  /--.--\\  `. . __",
        "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
        "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
        "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
        "======`-.____`-.___\\_____/___.-`____.-'======",
        "                   `=---='",
        "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
        "         佛祖保佑       永无BUG",
        "         Ready on http://localhost:3000"
    ].join('\n'));
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})