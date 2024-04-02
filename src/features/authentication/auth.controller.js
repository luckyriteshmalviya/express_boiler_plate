const getAuthController = (req, res) => {
  return res.send({ message: "This is a authRoute" });
};

module.exports = { getAuthController };
