const Announcement = require('../model/announcementModel');

// Create a new announcement
const createAnnouncement = async (req, res) => {
  try {
    const { textEn, textKan, videoUrl } = req.body;
    const announcement = new Announcement({ textEn, textKan, videoUrl });
    await announcement.save();
    res.status(201).json(announcement);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
    const announcement = await Announcement.findById(id);
    console.log('Announcement to be deleted:', announcement); // Log the announcement object
    if (!announcement) return res.status(404).json({ message: 'Announcement not found' });

    await announcement.remove();
    res.json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).json({ message: 'Invalid announcement ID' }); 
    } else {
      console.error('Error deleting announcement:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  

  
};

module.exports = { createAnnouncement, getAllAnnouncements, updateAnnouncement, deleteAnnouncement };
