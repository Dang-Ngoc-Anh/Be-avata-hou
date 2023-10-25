const Frame = require("../models/Frame.js");
const fs = require("fs");
// // add
const addFrame = async (req, res) => {
  try {
    const { userId, name, description } = req.body;
    let imageFile = req.file.path;
    imageFile = JSON.stringify(imageFile);
    imageFile = await JSON.parse(imageFile);
    imageFile = imageFile.toString().replace(/\\/g, "/");
    console.log(imageFile);
    // const insertQuery = `INSERT INTO frames (name, userId, image, description) VALUES ('${name}', '${userId}', '${imageFile}', '${description}')`;

    const result = await Frame.create({
      userId: userId,
      name: name,
      image: imageFile,
    });
    res.json({
      message: "create success fully",
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Create faile",
      error: res.json({
        message: `Error when trying upload images: ${error.message}`,
      }),
    });
  }
};

const getFrame = async (req, res) => {
  try {
    // const insertQuery = `SELECT * FROM frames`;
    const result = await Frame.findAll();
    res.json({
      message: "Get frame success fully",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

function toBase64(filePath) {
  console.log("sad ");
  console.log(fs.readFileSync(filePath));
  const img = fs.readFileSync(filePath);
  return Buffer.from(img).toString("base64");
}
const getFrameById = async (req, res) => {
  try {
    const { id } = req.params;
    const frame = await Frame.findByPk(id);
    console.log(frame.image);
    let image = `${frame.image}`;
    // toBase64(image);
    const withPrefix = `data:image/png;base64,${toBase64(image)}`;
    console.log(withPrefix);
    res.json({
      message: "Get frame id success fully",
      data: withPrefix,
    });
  } catch (error) {
    res.json({
      message: "Get frame id error" + error.message,
    });
  }
};
module.exports = { getFrame, addFrame, getFrameById };
