import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { announcementsRoute } from '../utils/APIRoutes';

const AnnouncementManager = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState({ textEn: '', textKan: '', videoUrl: '' });
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(announcementsRoute);
      setAnnouncements(response.data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const addAnnouncement = async () => {
    try {
      await axios.post(announcementsRoute, newAnnouncement);
      fetchAnnouncements();
      setNewAnnouncement({ textEn: '', textKan: '', videoUrl: '' });
    } catch (error) {
      console.error('Error adding announcement:', error);
    }
  };

  const updateAnnouncement = async () => {
    try {
      await axios.put(`${announcementsRoute}${editingAnnouncement.id}`, editingAnnouncement);
      fetchAnnouncements();
      setEditingAnnouncement(null);
    } catch (error) {
      console.error('Error updating announcement:', error);
    }
  };

  const deleteAnnouncement = async (announcementId) => {
    try {
      await axios.delete(`${announcementsRoute}${announcementId}`);
      fetchAnnouncements();
    } catch (error) {
      console.error('Error deleting announcement:', error);
    }
  };

  return (
    <div>
      <h2>Announcement Manager</h2>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            {editingAnnouncement === announcement ? (
              <>
                <input
                  type="text"
                  placeholder="English Text"
                  value={editingAnnouncement.textEn}
                  onChange={(e) => setEditingAnnouncement({ ...editingAnnouncement, textEn: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Kannada Text"
                  value={editingAnnouncement.textKan}
                  onChange={(e) => setEditingAnnouncement({ ...editingAnnouncement, textKan: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Video URL"
                  value={editingAnnouncement.videoUrl}
                  onChange={(e) => setEditingAnnouncement({ ...editingAnnouncement, videoUrl: e.target.value })}
                />
                <button onClick={updateAnnouncement}>Update</button>
                <button onClick={() => setEditingAnnouncement(null)}>Cancel</button>
              </>
            ) : (
              <>
                {announcement.textEn} - {announcement.textKan} - {announcement.videoUrl}
                <button onClick={() => setEditingAnnouncement(announcement)}>Edit</button>
                <button onClick={() => deleteAnnouncement(announcement.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <h3>Add New Announcement</h3>
      <input
        type="text"
        placeholder="English Text"
        value={newAnnouncement.textEn}
        onChange={(e) => setNewAnnouncement({ ...newAnnouncement, textEn: e.target.value })}
      />
      <input
        type="text"
        placeholder="Kannada Text"
        value={newAnnouncement.textKan}
        onChange={(e) => setNewAnnouncement({ ...newAnnouncement, textKan: e.target.value })}
      />
      <input
        type="text"
        placeholder="Video URL"
        value={newAnnouncement.videoUrl}
        onChange={(e) => setNewAnnouncement({ ...newAnnouncement, videoUrl: e.target.value })}
      />
      <button onClick={addAnnouncement}>Add</button>
    </div>
  );
};

export default AnnouncementManager;
