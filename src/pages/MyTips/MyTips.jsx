import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router";

const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/sharetips?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tips:", err);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-green-800 text-lg">
        🌿 Loading your garden tips...
      </div>
    );

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "🌱 Are you sure?",
      text: "This garden tip will be removed permanently!",
      icon: "warning",
      background: "#e8f5e9", // soft green background
      color: "#2e7d32", // deep green text
      iconColor: "#c62828", // warm red warning icon
      showCancelButton: true,
      confirmButtonColor: "#388e3c", // rich garden green
      cancelButtonColor: "#ef5350", // soft red
      confirmButtonText: "🌿 Yes, delete it!",
      cancelButtonText: "No, keep it",
      customClass: {
        popup: "rounded-xl shadow-lg",
        title: "text-xl font-bold",
        confirmButton: "px-6 py-2 rounded-full",
        cancelButton: "px-6 py-2 rounded-full",
      },
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // start deleting the tip
        fetch(`http://localhost:3000/sharetips/all/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
            setTips((prevTips) => prevTips.filter((tip) => tip._id !== _id));  
              Swal.fire({
                title: "🌼 Deleted!",
                text: "Your garden tip has been removed.",
                icon: "success",
                background: "#f1f8e9", // light greenish-yellow
                color: "#33691e",
                iconColor: "#43a047",
                confirmButtonColor: "#66bb6a",
                confirmButtonText: "OK 🌿",
                customClass: {
                  popup: "rounded-xl shadow",
                  confirmButton: "px-6 py-2 rounded-full",
                },
              });
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-3xl font-extrabold mb-6 text-emerald-800 text-center drop-shadow">
        🌱 My Garden Tips
      </h2>

      {tips.length === 0 ? (
        <p className="text-green-700 text-lg italic text-center">
          You haven’t added any tips yet.
        </p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-green-200">
          <table className="min-w-full divide-y divide-green-300 text-sm sm:text-base text-green-900">
            <thead className="bg-green-100 text-green-800 uppercase tracking-wide text-xs sm:text-sm">
              <tr>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Difficulty</th>
                <th className="px-4 py-3 text-left">Availability</th>
                <th className="px-4 py-3 text-left">Tip</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tips.map((tip) => (
                <tr
                  key={tip._id}
                  className="cursor-pointer hover:bg-green-50 border-t border-green-200"
                >
                  <td className="px-4 py-3 font-semibold">{tip.title}</td>
                  <td className="px-4 py-3">{tip.category}</td>
                  <td className="px-4 py-3">{tip.difficulty}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tip.availability === "Public"
                          ? "bg-green-600 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {tip.availability}
                    </span>
                  </td>
                  <td className="px-4 py-3 max-w-xs truncate">
                    {tip.description}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      
                      
                      <button
                        type="button"
                         onClick={() => navigate(`/updateTip/${tip._id}`)}
                        className="cursor-pointer flex items-center gap-1 px-3 py-1 text-sm bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                      >
                        <FaEdit className="text-xs" /> Update
                      </button>
                      <button
                        onClick={() => handleDelete(tip._id)}
                        type="button"
                        className="cursor-pointer flex items-center gap-1 px-3 py-1 text-sm bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                      >
                        <FaTrash className="text-xs" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTips;
