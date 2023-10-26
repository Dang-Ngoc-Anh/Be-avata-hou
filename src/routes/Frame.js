const express = require("express");
const {
  getFrame,
  addFrame,
  getFrameById,
} = require("../controllers/FrameController.js");
const uploadFile = require("../middleware/middleware.js");
const router = express.Router();

router.post(
  "/upload",
  uploadFile.single("image", (req, res, next) => {
    const file = req.file;
    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    res.send(file);
  }),
  addFrame
);
router.get("/upload", getFrame);
router.get("/upload/:id", getFrameById);

module.exports = router;
