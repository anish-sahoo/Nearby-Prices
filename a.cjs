// eslint-disable-next-line no-undef
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  if (!password) {
    throw new Error("Password argument is required");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

// Call hashPassword function with a password argument
hashPassword("anish")
  .then((hashedPassword) => {
    console.log(hashedPassword);
  })
  .catch((error) => {
    console.error("Error hashing password:", error);
  });
