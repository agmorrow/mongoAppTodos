const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const {
  Blog,
  Like,
  User,
  Todo
} = require('./model');


const seedDb = async () => {
  await mongoose.connect('mongodb://localhost:27017/mongoAppTodo');
  await Blog.deleteMany({});
  await Like.deleteMany({});
  await User.deleteMany({});
  await Todo.deleteMany({});

  const usersToCreate = [
    {
      username: faker.company.companyName(),
      email: faker.internet.email(),
      role: 'Employee',
    },
    {
      username: faker.company.companyName(),
      email: faker.internet.email(),
      role: 'Employee',
    },
    {
      username: faker.company.companyName(),
      email: faker.internet.email(),
      role: 'Employee',
    },
    {
      username: faker.company.companyName(),
      email: faker.internet.email(),
      role: 'Employee',
    },
    {
      username: faker.company.companyName(),
      email: faker.internet.email(),
      role: 'Employee',
    },
    {
      username: faker.company.companyName(),
      email: faker.internet.email(),
      role: 'Employee',
    },
];

const users = await User.insertMany(usersToCreate);

const todosToCreate = [
  {
    text: faker.random.word(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    text: faker.random.word(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    text: faker.random.word(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    text: faker.random.word(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    text: faker.random.word(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    text: faker.random.word(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    text: faker.random.word(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    text: faker.random.word(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    text: faker.random.word(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    text: faker.random.word(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
];

const todos = await Todo.insertMany(todosToCreate);

const blogsToCreate = [
  {
    description: faker.lorem.paragraph(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    description: faker.lorem.paragraph(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    description: faker.lorem.paragraph(),
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
];

const blogs = await Blog.insertMany(blogsToCreate);

const likesToCreate = [
  {
    userId: users[0]._id,
  },
  {
    userId: users[0]._id,
  },
  {
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
  {
    userId: users[Math.floor(Math.random() * users.length)]._id,
  },
];

const [like1, like2] = await Like.insertMany(likesToCreate);
const firstBlog = blogs[0];


const updatedBlog = await Blog.findByIdAndUpdate(
  firstBlog._id,
  {
    $addToSet: {
      likeIds: [ like1, like1]
    },
  },
  {
    new: true,
  }
).populate({
  path: 'likeIds',
  populate: 'userId',
});
console.log(updatedBlog.likeIds);


// firstBlog.likeIds.push(like1);
// firstBlog.likeIds.push(like2);

// await firstBlog.save();

// console.log(firstBlog);



const employees = await User.findByRole('Employee');

employees.forEach(employee => employee.greeting());

console.log(employees);

// console.log(blogs);

// Math.floor(Math.random() * users.length);

// console.log(users);

  process.exit(0);
};

seedDb();

