const router = require("express").Router()
let blogController = require("../controller/blogging").bloggingController()
var upload =  require("../middleware/uploadFile")



router.get("/allBlog" , blogController.allBlog)
router.post('/addBlog',upload.single('file'), blogController.addBlog);
router.put('/updateBlog',upload.single('file'), blogController.updateBlog);
router.delete('/deleteBlog',upload.none(), blogController.deleteBlog);



module.exports = router