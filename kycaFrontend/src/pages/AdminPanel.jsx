import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [inquiries, setInquiries] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [gems, setGems] = useState([]);
  const [email, setEmail] = useState("");
  const [gemName, setGemName] = useState("");
  const [gemImage, setGemImage] = useState(null);
  const [gemTeam, setGemTeam] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [listChange, setListChange] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [inquiriesRes, adminsRes, gemsRes] = await Promise.all([
          axios.get("http://localhost:3000/api/inquiries"),
          axios.get("http://localhost:3000/api/user/getAdmins"),
          axios.get("http://localhost:3000/api/gems"),
        ]);
        setInquiries(inquiriesRes.data);
        setAdmins(adminsRes.data.list || []);
        setGems(gemsRes.data || []);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    setListChange(false);
  }, [listChange]);

  const handleAddGem = async () => {
    const formData = new FormData();
    formData.append("name", gemName);
    formData.append("team", gemTeam);
    if (gemImage) {
      formData.append("img", gemImage);
    }

    try {
      await axios.post("http://localhost:3000/api/gems", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess("Gem added successfully.");
      setListChange(true);
    } catch {
      setError("Failed to add gem. Please try again.");
    }
  };

  const handleDeleteGem = async (gemId) => {
    try {
      await axios.delete(`http://localhost:3000/api/gems/${gemId}`);
      setSuccess("Gem deleted successfully.");
      setListChange(true);
    } catch {
      setError("Failed to delete gem. Please try again.");
    }
  };

  const handleAddAdmin = async () => {
    if (!email) return setError("Please enter a valid email.");
    try {
      await axios.post("http://localhost:3000/api/user/addAdmin", { email });
      setSuccess("Admin added successfully.");
      setEmail("");
      setListChange(true);
    } catch {
      setError("Failed to add admin. Please try again.");
    }
  };

  const handleDeleteAdmin = async (adminId) => {
    try {
      await axios.delete(`http://localhost:3000/api/user/deleteAdmin/${adminId}`);
      setSuccess("Admin deleted successfully.");
      setListChange(true);
    } catch {
      setError("Failed to delete admin. Please try again.");
    }
  };

  const handleDeleteInquiry = async (inquiryId) => {
    try {
      await axios.delete(`http://localhost:3000/api/inquiries/${inquiryId}`);
      setSuccess("Inquiry deleted successfully.");
      setListChange(true);
    } catch {
      setError("Failed to delete inquiry. Please try again.");
    }
  };

  if (loading) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="bg-black min-h-screen p-8 font-sans text-white">
      {success && <p className="text-green-500 mb-4">{success}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
      <hr className="border-gray-800 mb-6" />

      {/* Add Gem */}
      <h2 className="text-xl font-bold mb-4">ADD GEM</h2>
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Enter Gem name"
          className="p-2 border border-gray-600 rounded text-black"
          value={gemName}
          onChange={(e) => setGemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Gem team"
          className="p-2 border border-gray-600 rounded text-black"
          value={gemTeam}
          onChange={(e) => setGemTeam(e.target.value)}
        />
        <input
          type="file"
          className="p-2 border border-gray-600 rounded text-black"
          onChange={(e) => setGemImage(e.target.files[0])}
        />
        <button
          onClick={handleAddGem}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Gem
        </button>
      </div>

       {/* GEM List Section */}
       <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">GEMS</h2>
        {gems.length > 0 ? (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 p-2">ID</th>
                <th className="border border-gray-600 p-2">Name</th>
                <th className="border border-gray-600 p-2">Image</th>
                <th className="border border-gray-600 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {gems.map((gem) => (
                <tr key={gem.id} className="hover:bg-gray-700">
                  <td className="border border-gray-600 text-center p-2">{gem.id}</td>
                  <td className="border border-gray-600 text-center p-2">{gem.name}</td>
                  <td className="border border-gray-600 text-center p-2">
                    {gem.image && <img src={gem.image} alt={gem.name} className="w-16 h-16 object-cover" />}
                  </td>
                  <td className="border border-gray-600 text-center p-2">
                    <button
                      onClick={() => handleDeleteGem(gem.id)}
                      className="bg-red-500 hover:bg-red-900 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No gems found.</p>
        )}
      </div>

      <br />
      <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">ADD ADMIN</h2>
      <div className="flex items-center space-x-4">
        <input
          type="email"
          placeholder="Enter Admin Email"
          className="p-2 border border-gray-600 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleAddAdmin}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Admin
        </button>
      </div>
      {success && <p className="text-green-500 mt-2">{success}</p>}
      
      {/* Admin List Section */}
      <h2 className="text-xl font-bold mb-4">ADMINS</h2>
      {admins.length > 0 ? (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-600 p-2">ID</th>
              <th className="border border-gray-600 p-2">Email</th>
              <th className="border border-gray-600 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="border border-gray-600 text-center p-2">{admin.id}</td>
                <td className="border border-gray-600 text-center p-2">{admin.email}</td>
                <td className="border border-gray-600 text-center p-2">
                  {/* Add functionality to remove admins if needed */}
                  <button
                    className="bg-red-500 hover:bg-red-900 text-white px-4 py-2 rounded"
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No admins found.</p>
      )}
    </div>
      {/* ENQUIRIES Section */}
      <h2 className="text-xl font-bold mb-4">ENQUIRY TABLE</h2>
      {inquiries.length > 0 ? (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-600 p-2">ID</th>
              <th className="border border-gray-600 p-2">Name</th>
              <th className="border border-gray-600 p-2">Email</th>
              <th className="border border-gray-600 p-2">Message</th>
              <th className="border border-gray-600 p-2">Created At</th>
              <th className="border border-gray-600 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id} className="hover:bg-gray-700">
                <td className="border border-gray-600 p-2">{inquiry.id}</td>
                <td className="border border-gray-600 p-2">{inquiry.name}</td>
                <td className="border border-gray-600 p-2">{inquiry.email}</td>
                <td className="border border-gray-600 p-2">{inquiry.message}</td>
                <td className="border border-gray-600 p-2">
                  {new Date(inquiry.createdAt).toLocaleString()}
                </td>
                <td className="border border-gray-600 p-2">
                  <button
                    onClick={() => handleDeleteInquiry(inquiry.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No inquiries found.</p>
      )}
    </div>
  );
};

export default AdminPanel;
