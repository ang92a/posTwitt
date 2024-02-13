const router = require("express").Router();
const { User } = require("../../db/models");
const multer = require("multer");
router.get("/", async (req, res) => {
  try {
    const profiles = await User.findAll();
    res.json({ profiles });
  } catch ({ message }) {
    res.json({ type: "profiles router", message });
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/avatars/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.put("/", upload.array("file"), async (req, res) => {
  try {
    const { name, email, img, city, contact, birthDate } = req.body;
    const editProfile = await User.update(
      { name, email, img, city, contact, birthDate },
      { where: { id: res.locals.user.id } }
    );
    res.json({ editProfile });
  } catch ({ message }) {
    res.json({ type: "profiles router", message });
  }
});

module.exports = router;
