const express = require("express");
const router = express.Router();

const {
    createDocument,
    getDocuments,
    addUser,
    getDocumentById,
    deleteDocument,
    changeType
} = require("../controllers/document");

router.route("/create").post(createDocument);
router.route("/invite").post(addUser);
router.route("/file").post(getDocumentById);
router.route("/delete").post(deleteDocument);
router.route("/type").post(changeType)
router.route("/").post(getDocuments);

module.exports = router;