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

//   const usersToCreate = [
//     {
//       username: faker.company.companyName(),
//       email: faker.internet.email(),
//       role: 'Employee',
//     },
//     {
//       username: faker.company.companyName(),
//       email: faker.internet.email(),
//       role: 'Employee',
//     },
//     {
//       username: faker.company.companyName(),
//       email: faker.internet.email(),
//       role: 'Employee',
//     },
//     {
//       username: faker.company.companyName(),
//       email: faker.internet.email(),
//       role: 'Employee',
//     },
//     {
//       username: faker.company.companyName(),
//       email: faker.internet.email(),
//       role: 'Employee',
//     },
//     {
//       username: faker.company.companyName(),
//       email: faker.internet.email(),
//       role: 'Employee',
//     },
// ];

// const users = await User.insertMany(usersToCreate);

// const todosToCreate = [
//   {
//     text: faker.random.word(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     text: faker.random.word(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     text: faker.random.word(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     text: faker.random.word(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     text: faker.random.word(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     text: faker.random.word(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     text: faker.random.word(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     text: faker.random.word(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     text: faker.random.word(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     text: faker.random.word(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
// ];

// const todos = await Todo.insertMany(todosToCreate);

// const blogsToCreate = [
//   {
//     description: faker.lorem.paragraph(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     description: faker.lorem.paragraph(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     description: faker.lorem.paragraph(),
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
// ];

// await Blog.insertMany(blogsToCreate);

// const likesToCreate = [
//   {
//     userId: users[0]._id,
//   },
//   {
//     userId: users[0]._id,
//   },
//   {
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
//   {
//     userId: users[Math.floor(Math.random() * users.length)]._id,
//   },
// ];

// const [like1, like2] = await Like.insertMany(likesToCreate);
// // const firstBlog = blogs[0];

// // -1 descending from highest to lowest
// // 1 ascending from lowest to highest
// const blogs = await Blog.find({}).sort({ description: 1 }).limit(1);
// console.log(blogs);


// // How to add a like
// // const updatedBlog = await Blog.findByIdAndUpdate(
// //   firstBlog._id,
// //   {
// //     $addToSet: {
// //       likeIds: [ like1, like2 ]
// //     },
// //   },
// //   {
// //     new: true,
// //   }
// // ).populate({
// //   path: 'likeIds',
// //   populate: 'userId',
// // });

// // console.log('After adding', updatedBlog.likeIds);

// // // How to delete a like
// // const updatedBlogPartTwo = await Blog.findByIdAndUpdate(
// //   firstBlog._id,
// //   {
// //     $pull: {
// //       likeIds: like1._id,
// //     },
// //   },
// //   {
// //     new: true,
// //   }
// // ).populate({
// //   path: 'likeIds',
// //   populate: 'userId',
// // });
// // console.log('After removing', updatedBlogPartTwo.likeIds);


// // // firstBlog.likeIds.push(like1);
// // // firstBlog.likeIds.push(like2);

// // // await firstBlog.save();

// // // console.log(firstBlog);



// // const employees = await User.findByRole('Employee');

// // employees.forEach(employee => employee.greeting());

// // console.log(employees);

// // console.log(blogs);

// // Math.floor(Math.random() * users.length);

// // console.log(users);

const austin = await User.create({
  firstName: 'Austin',
  lastName: 'Morrow',
  username: 'austin',
  role: 'Employee',
  email: 'austin@morrow.com'
});

const cole = await User.create({
  firstName: 'Cole',
  lastName: 'Morrow',
  username: 'cole',
  role: 'Employee',
  email: 'cole@morrow.com'
});

const users = await User.find({});


// console.log(JSON.parse(JSON.stringify(users)));

console.log(users);

  process.exit(0);
};

seedDb();

