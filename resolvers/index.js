const booksList = [
  {
    id: 1,
    name: '《爱的博弈》',
    author: {
      name: '约翰•戈特曼；娜恩•西尔弗',
      age: 45
    }
  }, {
    id: 2,
    name: '《拥抱你的内在小孩》',
    author: {
      name: 'Krishnananda Trobe、Amana Trobe',
      age: 56
    }
  }, {
    id: 3,
    name: '《亲密关系》',
    author: {
      name: '克里斯多福·孟',
      age: 36
    }
  }, {
    id: 4,
    name: '《人类简史 从动物到上帝》',
    author: {
      name: '尤瓦尔·赫拉利',
      age: 36
    }
  }
];
const resolvers = {
  Query: {
    books: () => booksList
  },
};

module.exports = resolvers
