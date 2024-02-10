const router = require("express").Router();
const { User } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const profiles = await User.findAll();
    res.json({ profiles });
  } catch ({ message }) {
    res.json({ type: "profiles router", message });
  }
});

router.get("/:profileId", async (req, res) => {
  try {
    const { profileId } = req.params;
    const profile = await User.findOne({ where: { id: profileId } });
    res.json({ profile });
  } catch ({ message }) {
    res.json({ type: "profiles router", message });
  }
});

module.exports = router;
