const Mock = require('mockjs')

// 根据mock api来模拟数据
const data = Mock.mock({
  'list|1-10': [{
    'id|+1': 1,
    title: Mock.Random.ctitle(6),
    imgUrl: Mock.Random.image('200x100')
  }]
})

// 返回构造mock对象
module.exports = {
  msg: 'mock list api works',
  data: data
}
