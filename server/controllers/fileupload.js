const fs = require('fs');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = './files';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null,uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + '=' + file.originalname);
  }
});
// router.post('/upload-files', upload.single('file'), (req, res) => {
//   console.log(req.file);
//   res.status(201).send({ status: "ok", message: "Announcement created successfullyyyyyyy", filePath: req.file.path });
// })
const upload = multer({ storage: storage });

module.exports = upload;