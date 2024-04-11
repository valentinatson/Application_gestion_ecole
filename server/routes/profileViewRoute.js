const express = require("express");
const profileViewCtrl = require("../controllers/profileViewController")

const router = express.Router()

router.get("/profil", profileViewCtrl.profileView)

module.exports = router