import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [feedbacks , setFeedbacks] = useState([])
  const [links, setLinks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [listChange, setListChange] = useState(false);
  const [preview, setPreview] = useState(null);


//inquiries states
const [inquiries, setInquiries] = useState([]);




//admin States
const [admins, setAdmins] = useState([]);
const [email, setEmail] = useState("");



  //gem states
  const [gems, setGems] = useState([]); // New state for gems
  const [gemName, setGemName] = useState("");
  const [gemImage, setGemImage] = useState(null);
  const [gemTeam, setGemTeam] = useState("");



  //coach states
  const [coaches,setCoaches]=useState([]);
  const [coachName,setCoachName]=useState("");
  const [coachImage,setCoachImage]=useState(null);
  const [coachPhone,setCoachPhone]=useState(null);


  useEffect(() => {
    
    const fetchAdmins = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/user/getAdmins");
        setAdmins(response.data.list || []); // Ensure admins is always set to an array
      } catch (err) {
        setError("Failed to fetch admins. Please try again later.");
      }
    };



    const fetchGems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/gems"); 
        setGems(response.data|| []);
      } catch (err) {
        setError("Failed to fetch gems");
      }
    };
    const fetchCoaches=async()=>{
      try{
        const response=await axios.get("http://localhost:3000/api/coach");
        setCoaches(response.data || []);
      }catch(err){
        setError("Failed to fetch coaches")
      }
    }
    fetchCoaches();
    fetchGems();
    fetchAdmins();
    setListChange(false);
  }, [listChange]); // Dependency on listChange to re-fetch
  
  useEffect(() => {
    const fetchData = () => {
      fetchFeedbacks();
      fetchInquiries();
    };
    fetchData(); 
  
    const interval = setInterval(fetchData, 30000); 
  
    return () => clearInterval(interval); 
  }, []);
  
  
useEffect(()=>{  
  const fetchLinks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/user/links"); 
    setLinks(response.data[0]);
    console.log(links);
  } catch (err) {
    setError("Failed to fetch gems");
  }
}

fetchLinks();
},[]);

const fetchFeedbacks = async()=>{
  try{
    const response = await axios.get('http://localhost:3000/api/admin/getAllFeedback')
    console.log(response.data.feedback)
    setFeedbacks(response.data.feedback)
  }
  catch(e){
    console.log(e);
  }
}

  const fetchInquiries = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/inquiries");
      setInquiries(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch inquiries. Please try again later.");
      setLoading(false);
    }
  };
  const handleDeleteInquiries = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/inquiries/${id}`);
      setInquiries((prevInquiries) =>
        prevInquiries.filter((inquiry) => inquiry.id !== id)
      );
      setSuccess("Inquiry deleted successfully.");
      setListChange(true); // Trigger re-fetch
    } catch (err) {
      setError("Failed to delete inquiry. Please try again.");
    }
  };

  const handleDeleteFeedback = async(id)=>{
    try{
      await axios.post('http://localhost:3000/api/admin/delFeedback' , {id})
      setSuccess("Feedback deleted!")
      setListChange(true); 
    }
    catch(e)
    {
      setError('Failed to delete Feedback!')
    }
  }

  const handleChooseFeedback = async(id,choice) =>{
    try{
      await axios.post('http://localhost:3000/api/admin/chooseFeedback' , {id})
      setSuccess(`Feedback ${choice == 1?'chosen':'unchosen'}`)
    }
    catch(e)
    {
      setError(`Failed to ${choice == 1?'choose':'unchoose'} feedback`)
    }
  }

  const handleAddAdmin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/user/addAdmin", { email });
      if (response.data.msg === "Invalid email" || response.data.msg === "No user found") {
        setSuccess("Failed to add admin");
      } else {
        setSuccess("Admin added successfully.");
      }
      setEmail(""); 
      setListChange(true); // Trigger re-fetch
    } catch (err) {
      setError("Failed to add admin. Please try again.");
    }
  };

  const handleRemoveAdmin = async (AdminEmail) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/user/delAdmin`, { email: AdminEmail });
      setSuccess("Admin removed successfully.");
      setListChange(true); // Trigger re-fetch
    } catch (err) {
      setError("Failed to remove admin. Please try again.");
    }
  };


  //GEM functions

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
      setGemTeam("");
      setGemName("");
      setSuccess("Gem added successfully.");
      setListChange(true);
      setPreview(null);

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

  const handleFileChangeGem = (e) => {
    const file = e.target.files[0];
    setGemImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); 
      };
      reader.readAsDataURL(file); 
    } else {
      setPreview(null);
    }
  };

//coach functions

//add coach
  const handleAddCoach=async()=>{
    const formData=new FormData();
    formData.append("name", coachName);
    formData.append("phone",coachPhone);
    if(coachImage){
      formData.append("img",coachImage);
    }
    try {
      await axios.post("http://localhost:3000/api/coach", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess("Coach added successfully.");
      setListChange(true);
      setPreview(null);
      setCoachName("");
      setCoachPhone("");
    } catch {
      setError("Failed to add Coach. Please try again.");
    }
  }


//Delete coach
  const handleDeleteCoach = async (coachId) => {
    try {
      await axios.delete(`http://localhost:3000/api/coach/${coachId}`);
      setSuccess("Coach deleted successfully.");
      setListChange(true);
    } catch {
      setError("Failed to delete Coach. Please try again.");
    }
  };
  const handleFileChangeCoach = (e) => {
    const file = e.target.files[0];
    setCoachImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); 
      };
      reader.readAsDataURL(file); 
    } else {
      setPreview(null);
    }
  };

//link functions


const handleChange = (e) => {
  const { name, value } = e.target;
  setLinks((prev) => ({ ...prev, [name]: value }));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      axios.put(`http://localhost:3000/api/admin/links/0`,{facebook:links.facebook,instagram:links.instagram,whatsapp:links.whatsapp});
      setSuccess("links updated successfully")
    }catch(err){
      setError("failed to update links");
    }
  };


  if (loading) return <p className="text-white text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="bg-black min-h-screen p-8 font-sans text-white">
      <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
      <hr className="border-gray-800" />
      <br />
      {success && (success !== "Failed to add admin") && <p className="text-green-500 mb-4">{success}</p>}
      {success && (success === "Failed to add admin") && <p className="text-red-500 mb-4">{success}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}






      {/* ADD ADMIN Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">ADD ADMIN</h2>
        <div className="flex items-center space-x-4">
          <input
            type="email"
            placeholder="Enter email"
            className="p-2 border border-gray-600 rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleAddAdmin}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>




      {/* ADMINS Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">ADMINS</h2>
        {admins.length > 0 ? (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 p-2">ID</th>
                <th className="border border-gray-600 p-2">Name</th>
                <th className="border border-gray-600 p-2">Email</th>
                <th className="border border-gray-600 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.id} className="hover:bg-gray-700">
                  <td className="border border-gray-600 text-center p-2">{admin.id}</td>
                  <td className="border border-gray-600 text-center p-2">{admin.name}</td>
                  <td className="border border-gray-600 text-center p-2">{admin.email}</td>
                  <td className="border border-gray-600 text-center p-2">
                    <button
                      onClick={() => handleRemoveAdmin(admin.email)}
                      className="bg-red-500 hover:bg-red-900 text-white px-4 py-2 rounded"
                    >
                      Remove
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


      {/* INQUIRIES Section */}
      <br />
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
                    onClick={() => handleDeleteInquiries(inquiry.id)}
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


      {/*GEMS section*/}
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
        accept="image/*" // Limit to images only
        className="p-2 border border-gray-600 rounded text-black"
        onChange={handleFileChangeGem}
      />
      {preview && (
        <div className="mt-4">
          <p>Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded border"
          />
        </div>
      )}
        <button
          onClick={handleAddGem}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Gem
        </button>
      </div>
      
      {/*Display Gem*/}
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
                    { <img src={`http://localhost:3000${gem.img}`} alt={gem.name} className="w-16 h-16 object-cover" />}
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

      {/* Feedbacks Section */}
<div className="mb-6">
  <h2 className="text-xl font-bold mb-4">FEEDBACKS</h2>
  {feedbacks.length > 0 ? (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-800">
          <th className="border border-gray-600 p-2">ID</th>
          <th className="border border-gray-600 p-2">Name</th>
          <th className="border border-gray-600 p-2">Email</th>
          <th className="border border-gray-600 p-2">Rating</th>
          <th className="border border-gray-600 p-2">Message</th>
          <th className="border border-gray-600 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {feedbacks.map((feedback) => (
          <tr key={feedback.id} className="hover:bg-gray-700">
            <td className="border border-gray-600 text-center p-2">{feedback.id}</td>
            <td className="border border-gray-600 text-center p-2">{feedback.name}</td>
            <td className="border border-gray-600 text-center p-2">{feedback.email}</td>
            <td className="border border-gray-600 text-center p-2">{feedback.rating}</td>
            <td className="border border-gray-600 text-center p-2 overflow-hidden text-ellipsis whitespace-nowrap" style={{ maxWidth: '150px' }}>
              {feedback.message}
            </td>
            <td className="border border-gray-600 text-center p-2 flex justify-center gap-2">
              <button
                onClick={() => handleChooseFeedback(feedback.id,1)}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
              >
                Choose
              </button>
              <button
                onClick={() => handleChooseFeedback(feedback.id,2)}
                className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded transition duration-200"
              >
                Unchoose
              </button>
              <button
                onClick={() => handleDeleteFeedback(feedback.id)}
                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-200"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p className="text-center">No feedbacks found.</p>
  )}
</div>





      {/**Coach Section*/}
      <h2 className="text-xl font-bold mb-4">ADD COACH</h2>
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Enter Coach name"
          className="p-2 border border-gray-600 rounded text-black"
          value={coachName}
          onChange={(e) => setCoachName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Coach Phone"
          className="p-2 border border-gray-600 rounded text-black"
          value={coachPhone}
          onChange={(e) => setCoachPhone(e.target.value)}
        />
        <input
        type="file"
        accept="image/*" // Limit to images only
        className="p-2 border border-gray-600 rounded text-black"
        onChange={handleFileChangeCoach}
      />
      {preview && (
        <div className="mt-4">
          <p>Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded border"
          />
        </div>
      )}
        <button
          onClick={handleAddCoach}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Coach
        </button>
      </div>




      {/*Display Coach*/}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">COACHES</h2>
        {coaches.length > 0 ? (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 p-2">ID</th>
                <th className="border border-gray-600 p-2">Name</th>
                <th className="border border-gray-600 p-2">Phone</th>
                <th className="border border-gray-600 p-2">Image</th>
                <th className="border border-gray-600 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {coaches.map((coach) => (
                <tr key={coach.id} className="hover:bg-gray-700">
                  <td className="border border-gray-600 text-center p-2">{coach.id}</td>
                  <td className="border border-gray-600 text-center p-2">{coach.name}</td>
                  <td className="border border-gray-600 text-center p-2">{coach.phone}</td>
                  <td className="border border-gray-600 text-center p-2">
                    { <img src={`http://localhost:3000${coach.img}`} alt={coach.name} className="w-16 h-16 object-cover" />}
                  </td>
                  <td className="border border-gray-600 text-center p-2">
                    <button
                      onClick={() => handleDeleteCoach(coach.id)}
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
          <p className="text-center">No coaches found.</p>
        )}
      </div>


      <div className="admin-edit-links">
      <h2>Edit Social Links</h2>
      <form className="edit-links-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="facebook">Facebook:</label>
          <input
                    className="text-black"

            type="url"
            id="facebook"
            name="facebook"
            value={links.facebook}
            onChange={handleChange}
            placeholder="Enter Facebook URL"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="instagram">Instagram:</label>
          <input
                    className="text-black"

            type="url"
            id="instagram"
            name="instagram"
            value={links.instagram}
            onChange={handleChange}
            placeholder="Enter Instagram URL"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="whatsapp">WhatsApp:</label>
          <input
          className="text-black"
            type="url"
            id="whatsapp"
            name="whatsapp"
            value={links.whatsapp}
            onChange={handleChange}
            placeholder="Enter WhatsApp URL"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button></div>
      </form>
    </div>

    </div>
  );
};

export default AdminPanel;
