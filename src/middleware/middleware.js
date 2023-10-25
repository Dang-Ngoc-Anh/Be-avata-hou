const multer = require("multer");
const path = require("path");

const imageFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

var uploadFile = multer({
  storage: storage,
  fileFilter: imageFilter,
  // limits: 4 * 500 * 500,
});
module.exports = uploadFile;
