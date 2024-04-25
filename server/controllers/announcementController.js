const Announcement = require('../model/announcementModel');

// Create a new announcement
createAnnouncement = async (req, res) => {
  try {
      const { textEn, textKan, videoUrl } = req.body;
      const { filename } = req.file;

      const newAnnouncement = new Announcement({
          textEn,
          textKan,
          videoUrl,
          filename
      });

      await newAnnouncement.save();
      
      res.status(201).json({ message: "Announcement created successfully" });
  } catch (error) {
      console.error("Error creating announcement:", error);
      res.status(500).json({ error: "Internal server error" });
  }
};



const getAllAnnouncements = async (req, res) => {
  try {
    console.log('Announcement before find:', Announcement);
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an announcement
const updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const { textEn, textKan, videoUrl } = req.body;
    const announcement = await Announcement.findById(id);
    if (!announcement) return res.status(404).json({ message: 'Announcement not found' });

    announcement.textEn = textEn;
    announcement.textKan = textKan;
    announcement.videoUrl = videoUrl;
    await announcement.save();
    res.json(announcement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAnnouncement = await Announcement.findByIdAndDelete(id);
    if (!deletedAnnouncement) return res.status(404).json({ message: 'Announcement not found' });

    res.json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    console.error('Error deleting announcement:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

  

module.exports = { createAnnouncement, getAllAnnouncements, updateAnnouncement, deleteAnnouncement };