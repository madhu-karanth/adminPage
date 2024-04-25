import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { announcementsRoute } from '../utils/APIRoutes';
import '../styles/AnnouncementManager.css';

const AnnouncementManager = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState({ textEn: '', textKan: '', videoUrl: '', file: null });
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
    fetchPdfFiles();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(announcementsRoute);
      setAnnouncements(response.data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const fetchPdfFiles = async () => {
    try {
      const response = await axios.get(announcementsRoute);
      setPdfFiles(response.data);
    } catch (error) {
      console.error('Error fetching PDF files:', error);
    }
  };

  const viewPDF = (filename) => {
    const pdfUrl = `http://localhost:5000/files/${filename}`;
    window.open(pdfUrl, '_blank');
  };

  const addAnnouncement = async () => {
    try {
      const formData = new FormData();
      formData.append('textEn', newAnnouncement.textEn);
      formData.append('textKan', newAnnouncement.textKan);
      formData.append('videoUrl', newAnnouncement.videoUrl);
      formData.append('file', newAnnouncement.file);

      const response = await axios.post(announcementsRoute, formData);
      fetchAnnouncements();
      setNewAnnouncement({ textEn: '', textKan: '', videoUrl: '', file: null });
      setShowAddPopup(false);
    } catch (error) {
      console.error('Error adding announcement:', error.response ? error.response.data : error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewAnnouncement({ ...newAnnouncement, file });
  };

  const editAnnouncement = (announcement) => {
    setEditingAnnouncement(announcement);
  };

  const cancelEdit = () => {
    setEditingAnnouncement(null);
  };

  const updateAnnouncement = async () => {
    try {
      const formData = new FormData();
      formData.append('textEn', editingAnnouncement.textEn);
      formData.append('textKan', editingAnnouncement.textKan);
      formData.append('videoUrl', editingAnnouncement.videoUrl);
      if (editingAnnouncement.file) {
        formData.append('file', editingAnnouncement.file);
      }

      await axios.put(`${announcementsRoute}/${editingAnnouncement._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      fetchAnnouncements();
      setEditingAnnouncement(null);
    } catch (error) {
      console.error('Error updating announcement:', error);
    }
  };

  const deleteAnnouncement = async (announcementId) => {
    try {
      await axios.delete(`${announcementsRoute}/${announcementId}`);
      fetchAnnouncements();
    } catch (error) {
      console.error('Error deleting announcement:', error);
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
                <th>PDF Path</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((announcement) => (
                <tr key={announcement._id}>
                  <td>
                    {editingAnnouncement && editingAnnouncement._id === announcement._id ? (
                      <input
                        type="text"
                        value={editingAnnouncement.textEn}
                        onChange={(e) => setEditingAnnouncement({ ...editingAnnouncement, textEn: e.target.value })}
                      />
                    ) : (
                      announcement.textEn
                    )}
                  </td>
                  <td>
                    {editingAnnouncement && editingAnnouncement._id === announcement._id ? (
                      <input
                        type="text"
                        value={editingAnnouncement.textKan}
                        onChange={(e) => setEditingAnnouncement({ ...editingAnnouncement, textKan: e.target.value })}
                      />
                    ) : (
                      announcement.textKan
                    )}
                  </td>
                  <td>
                    {editingAnnouncement && editingAnnouncement._id === announcement._id ? (
                      <input
                        type="url"
                        value={editingAnnouncement.videoUrl}
                        onChange={(e) => setEditingAnnouncement({ ...editingAnnouncement, videoUrl: e.target.value })}
                      />
                    ) : (
                      <a href={announcement.videoUrl} target="_blank" rel="noopener noreferrer">{announcement.videoUrl}</a>
                    )}
                  </td>
                  <td>
                    <button onClick={() => viewPDF(announcement.filename)}>View PDF</button>
                  </td>
                  <td>
                    {/* {editingAnnouncement && editingAnnouncement._id === announcement._id ? (
                      <><button onClick={updateAnnouncement}>Update</button><button onClick={cancelEdit}>Cancel</button></>
                    ) : (
                      <button onClick={() => setEditingAnnouncement(announcement)}>Edit</button>
                    )} */}
                    <button onClick={() => deleteAnnouncement(announcement._id)}>Delete</button>
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
                type="url"
                placeholder="Video URL"
                value={newAnnouncement.videoUrl}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, videoUrl: e.target.value })}
              />
              <input
                type="file"
                accept='application/pdf'
                required
                onChange={handleFileChange}
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
