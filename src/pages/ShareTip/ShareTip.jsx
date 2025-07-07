import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FaSeedling } from "react-icons/fa";
import Swal from "sweetalert2";

const ShareTip = () => {
  const { user } = use(AuthContext);

  if (!user) {
    return (
      <div className="text-center text-gray-600 p-4">Loading user info...</div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newShareTipData = Object.fromEntries(formData.entries());
    console.log(newShareTipData);

    // send data to the db
    fetch("http://localhost:3000/sharetips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newShareTipData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("added successfully");
          Swal.fire({
            title: "🌿 Tips Shared Successfully!",
            text: "Your gardening wisdom has been planted in our community!",
            icon: "success",
            iconColor: "#34D399", // A soft green
            confirmButtonText: "Bloom On 🌼",
            confirmButtonColor: "#4ADE80", // Green button
            background: "#F0FDF4", // Light leafy green
            color: "#065F46", // Dark green text
            customClass: {
              popup: "rounded-xl shadow-md",
            },
          });

          form.reset();
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 mb-20 bg-gradient-to-br from-lime-50 to-green-100 rounded-3xl shadow-2xl border border-emerald-200 transition-all duration-300 hover:shadow-green-200">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <FaSeedling className="text-3xl text-green-600 animate-pulse" />
        <h2 className="text-3xl font-extrabold text-green-700">
          Share Your Gardening Tip
        </h2>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 text-green-900 font-medium"
      >
        {/* Title */}
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g., How I Grow Tomatoes Indoors"
            required
            className="w-full p-3 mt-1 rounded-xl border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
          />
        </div>

        {/* Plant Type */}
        <div>
          <label>Plant Type / Topic</label>
          <input
            type="text"
            name="plantType"
            placeholder="e.g., Tomato, Orchids, Microgreens"
            required
            className="w-full p-3 mt-1 rounded-xl border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
          />
        </div>

        {/* Difficulty */}
        <div>
          <label>Difficulty Level</label>
          <select
            name="difficulty"
            required
            className="w-full p-3 mt-1 rounded-xl border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label>Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Share your gardening experience..."
            required
            className="w-full p-3 mt-1 rounded-xl border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner resize-none"
          ></textarea>
        </div>

        {/* Image URLs */}
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="images"
            placeholder="https://example.com/photo1.jpg"
            className="w-full p-3 mt-1 rounded-xl border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
          />
        </div>

        {/* Category */}
        <div>
          <label>Category</label>
          <select
            name="category"
            required
            className="w-full p-3 mt-1 rounded-xl border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
          >
            <option value="">Select Category</option>
            <option value="Composting">Composting</option>
            <option value="Plant Care">Plant Care</option>
            <option value="Vertical Gardening">Vertical Gardening</option>
            <option value="Herbs & Vegetables">Herbs & Vegetables</option>
            <option value="Container Gardening">Container Gardening</option>
          </select>
        </div>

        {/* Availability */}
        <div>
          <label>Availability</label>
          <select
            name="availability"
            required
            className="w-full p-3 mt-1 rounded-xl border border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
          >
            <option value="">Select Availability</option>
            <option value="Public">Public</option>
            <option value="Hidden">Hidden</option>
          </select>
        </div>

        {/* Read-Only User Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Your Name</label>
            <input
              type="text"
              name="userName"
              value={user.displayName}
              readOnly
              className="w-full p-3 mt-1 bg-gray-100 rounded-xl border border-green-300 text-gray-700 shadow-inner"
            />
          </div>
          <div>
            <label>Your Email</label>
            <input
              type="email"
              name="userEmail"
              value={user.email}
              readOnly
              className="w-full p-3 mt-1 bg-gray-100 rounded-xl border border-green-300 text-gray-700 shadow-inner"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-600 hover:to-lime-600 text-white font-semibold text-lg py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            🌱 Submit Your Tip
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShareTip;
