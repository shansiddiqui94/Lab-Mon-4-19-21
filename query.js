const db = require("./db");
const User = require("./models/user");
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const findAll = async () => {
  const users = await User.find();
  console.log("All users:", users);
};
const createUser = async () => {
  const pets = await User.insertMany(
    { name: "shan", age: 26, status: "active" },
    { name: "Ayman", age: 30, status: "not sure" }
  );
  console.log(User);
};
const deleteUser = async () => {
  const deletePets = await User.deleteMany({
    name: "Ayman",
  });
  console.log(User);
};

const updateUser = async () => {
  const updatePets = await User.updateMany(
    {
      name: "shan", // find query first pram
    },
    { $set: { status: "not sure" } } // add to db  // this pram is to update or add
  );
  console.log(User);
};

const findAllNames = async () => {
  const namesPets = await User.find({}, { name: 1 });
  console.log("All Names", namesPets);
};

const petsOlderthan25 = async () => {
  const olderPet = await User.find({ age: { $gt: 25 } });
  console.log("All users older than 25 ", olderPet);
};

const petsYoungerthan25 = async () => {
  const youngPets = await User.find({ status: "active", age: { $lt: 25 } });
  console.log("All users younger than 25 ", youngPets);
};

const run = async () => {
  await createUser();
  await deleteUser();
  await updateUser();
  await findAllNames();
  await petsOlderthan25();
  await petsYoungerthan25();
  await findAll();
  process.exit();
};
run();
