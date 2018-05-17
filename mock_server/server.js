const Koa = require('koa')
const KoaRouter = require('koa-router')
const Boom = require('boom')
const BodyParser = require('koa-bodyparser')

const app = new Koa()

const router = new KoaRouter()

// 设置端口
const Port = 9191

app.use(router.routes())
/* eslint-disable */
app.use(router.allowedMethods({
  throw: true,
  notImplemented: () => new Boom.notImplemented(),
  methodNotAllowed: () => new Boom.methodNotAllowed()
}))

app.use(BodyParser())

// 数据模拟返回
// ------- api 接口模拟 start -------
const ListViewApiData = require('./ListViewApi')
router.get('/api/list', async (ctx, next) => {
  ctx.body = ListViewApiData
  await next()
})
// ------- api 接口模拟 end -------

// todo -> 添加接口模拟api按照上面格式

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx)
})

app.listen(Port)

console.log(`Mock Server is running at http://localhost:${Port} port...`)
