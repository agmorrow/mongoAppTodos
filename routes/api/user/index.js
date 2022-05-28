const router = require('express').Router();
const { createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  } = require('../../../controllers/userController');

// /api/users prepends to every route
// router.post('/', createUser);
// router.get('/', getAllUsers);

router.route ('/')
  .get(getAllUsers)
  .post(createUser);

  router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

module.exports = router;