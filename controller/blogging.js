const async = require("hbs/lib/async");

function bloggingController() {
  const allBlog = (req, res, next) => {
    let sql = "SELECT * FROM blogdata";
    DB.query(sql, function (err, rows, fields) {
      return res.json(rows);
    });
  };
  const addBlog = async (req, res, next) => {
    var title = req.body.title;
    var body = req.body.body;
    var autherName = req.body.autherName;
    var file = req.file;
    const sql = `INSERT INTO blogdata (title,body,autherName,imageUrl) VALUES ("${title}","${body}","${autherName}","${file.originalname}")`;
    DB.query(sql, function (err, rows, fields) {
      if (err) {
        return res.status(500).send({ error: err });
      }
      if (!err) {
        return res.json({ status: "Succesfully added", mes: "`2233" });
      }
    });
  };
  const updateBlog = async (req, res, next) => {
    var blogId = req.body.blogId;
    var title = req.body.title;
    var body = req.body.body;
    var autherName = req.body.autherName;
    let fileUpload = req.file;
    let file =  req.body.file
    console.log("pic is ", req.body.file);
    console.log("pic is upload ", req.file);
    if (req.body.file == undefined) {
      console.log("enter upload field")
      const sql = `UPDATE blogdata SET  title="${title}",body="${body}", autherName = "${autherName}" ,imageUrl="${fileUpload.originalname}" WHERE blogId = "${blogId}" `;
      DB.query(sql, function (err, rows, fields) {
        if (err) {
          return res.status(500).send({ error: err });
        }
        if (!err) {
          return res.json({ status: "Succesfully Update" });
        }
      });
    }
    if (req.body.file != undefined) {
      console.log("enter upload field not")
      const sql = `UPDATE blogdata SET  title="${title}",body="${body}", autherName = "${autherName}" ,imageUrl="${file}" WHERE blogId = "${blogId}" `;
      DB.query(sql, function (err, rows, fields) {
        if (err) {
          return res.status(500).send({ error: err });
        }
        if (!err) {
          return res.json({ status: "Succesfully Update" });
        }
      });
    }

   
  };

  const deleteBlog = async (req, res, next) => {
    let blogId = req.body.blogId;

    DB.query(
      "DELETE FROM blogdata WHERE blogId=?  ",
      [blogId],
      function (err, rows, fields) {
        if (err) {
          return res.status(500).send({ error: err });
        }
        if (!err) {
          return res.json({ status: "Succesfully Delete" });
        }
      }
    );
  };
  return { allBlog, addBlog, updateBlog, deleteBlog };
}
module.exports = { bloggingController };
