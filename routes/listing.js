const express = require("express");
const router = express.Router();
const { isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const {storage} = require("../cloudConfig.js");
const multer  = require('multer');
const upload = multer({ storage });

router
.route("/")
.get(
  listingController.index
)
.post(
  isLoggedIn,
  validateListing,
  upload.single('image[url]'),
  listingController.NewListingAddition
);

router.get("/new",
  isLoggedIn, 
  listingController.renderNewListingForm
);

router
.route("/:id")
.get(
  listingController.showListing
)
.put(
  isLoggedIn,
  isOwner,
  upload.single('image[url]'),
  validateListing,
  listingController.EditListing
)
.delete(
  isLoggedIn,
  isOwner,
  listingController.deleteListing
);

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  listingController.renderEditPage
);

module.exports = router;