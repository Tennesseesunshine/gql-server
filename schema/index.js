var resolvers = require('../resolvers/index')
var {makeExecutableSchema} = require('apollo-server')

// 这里的查询Books是需要和resolvers中的key相同，否则查询不到
// 类型是由单独的类型合并起来
/**
 * author是一个  {name: xx,
  age: xx}的对象，所以需要单独定义一个类似的Author类型，给author.
  如果是数组的话，就用[]包起来需要的类型
 */

const typeDefs = `
type Author {
  name: String
  age: Int
}

type Books {
  id: ID!
  name: String
  author: Author
}
  type Query {
    books: [Books]
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
module.exports = schema;