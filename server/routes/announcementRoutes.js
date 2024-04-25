const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/announcementController');
const upload = require('../controllers/fileupload'); 
const fs = require('fs');
const path = require('path');

router.post('/', upload.single('file'), announcementController.createAnnouncement);
router.get('/', announcementController.getAllAnnouncements);
router.put('/:id', announcementController.updateAnnouncement);
router.delete('/:id', announcementController.deleteAnnouncement);
router.get('/pdfs', (req, res) => {
    const pdfDirectory = path.join(__dirname, 'files'); // Assuming your PDF files are stored in the 'files' directory
    fs.readdir(pdfDirectory, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        res.status(500).send('Internal server error');
      } else {
        const pdfFiles = files.filter(file => file.endsWith('.pdf'));
        res.status(200).json(pdfFiles);
      }
    });
  });

module.exports = router;