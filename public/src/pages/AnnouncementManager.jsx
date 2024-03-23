import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { announcementsRoute } from '../utils/APIRoutes';
import './AnnouncementManager.css';

const AnnouncementManager = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState({ textEn: '', textKan: '', videoUrl: '' });
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [showAddPopup, setShowAddPopup] = useState(false);

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
      setShowAddPopup(false);
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
    console.log('Deleting announcement with ID:', announcementId);
    try {
      await axios.delete(`${announcementsRoute}/${announcementId}`);
      fetchAnnouncements(); 
    } catch (error) {
      if (error.response.status === 404) {
        console.error('Announcement not found');
      } else if (error.response.status === 400) {
        console.error('Error deleting announcement:', error);
        alert('An error occurred while deleting the announcement. Please try again later.'); // User-friendly message
      } else {
        console.error('Unexpected error deleting announcement:', error);
      }
    }
  };
  

  return (
    <div className="announcement-manager-container">
      <h2 className="center">Announcement Manager</h2>
      <div className="box">
      <div className="button-container">
       <button className="add-button" onClick={() => setShowAddPopup(true)}>Add Announcement</button>
        </div>

        <div>
          <table className="announcement-table">
            <thead>
              <tr>
                <th>English Text</th>
                <th>Kannada Text</th>
                <th>Video URL</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((announcement) => (
                <tr key={announcement.id}>
                  <td>{announcement.textEn}</td>
                  <td>{announcement.textKan}</td>
                  <td>{announcement.videoUrl}</td>
                  <td>
                    <button onClick={() => setEditingAnnouncement(announcement)}>Edit</button>
                    <button onClick={() => deleteAnnouncement(announcement.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showAddPopup && (
          <div className="popup-container">
            <h3 className="center">Add New Announcement</h3>
            <div>
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
              <button onClick={() => setShowAddPopup(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default AnnouncementManager;