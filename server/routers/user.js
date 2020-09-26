const auth = require("../middleware/auth");
const express = require("express");
const User = require("../models/user");
const router = new express.Router();
var cors = require("cors");

//after request opotion needed
router.options("/users", cors());
router.options("/users/login", cors());
router.options("/users/me", cors());

const multer = require("multer");
const sharp = require("sharp");

router.post("/users", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const user = await new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({
      user,
      token,
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/users", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/users/login", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({
      user,
      token,
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });

    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];

    await req.user.save();

    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/users/me", auth, async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.send(req.user);
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).send();
    }

    await res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "phone",
    "email",
    "age",
    "username",
    "password",
  ];

  const isValidaOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidaOperation) {
    res.status(404).send({
      error: "Inavalid update",
    });
  }

  try {
    updates.forEach((update) => {
      return (req.user[update] = req.body[update]);
    });

    await req.user.save();

    res.send(req.user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.status(200).send(req.user);
  } catch (e) {
    res.status(500).send(e);
  }
});

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
      return cb(new Error("Please upload image"));
    }
    cb(undefined, true);

    // cb(new Error("Error"));
    // cb(undefined, true);
    // cb(undefined, false);
  },
});

router.post(
  "/users/me/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    req.user.avatar = buffer;
    await req.user.save();
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.delete("/users/me/avatar", auth, async (req, res) => {
  req.user.avatar = undefined;
  await req.user.save();
  res.status(200).send();
});

router.get("/users/:id/avatar", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || !user.avatar) {
      throw new Error();
    }

    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch {
    res.status(404).send();
  }
});

module.exports = router;
