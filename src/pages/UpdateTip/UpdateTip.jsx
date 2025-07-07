// import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { FaSeedling } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateTip = () => {
  const {
    _id,
    title,
    plantType,
    difficulty,
    description,
    images,
    category,
    userName,
    availability,
    userEmail,
  } = useLoaderData();
  console.log("ID used in update:", _id);
  //   const { user } = useContext(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const UpdatedTip = Object.fromEntries(formData.entries());
    console.log(UpdatedTip);
    // send updated coffee to the db
    fetch(`http://localhost:3000/sharetips/all/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedTip),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "🌱 Tip Updated Successfully!",
            text: "Thanks for growing with us 🌼",
            showConfirmButton: false,
            timer: 1800,
            background: "#f0fdf4", // light green background
            color: "#065f46", // deep green text
            iconColor: "#22c55e", // success green
            toast: true,
            customClass: {
              popup: "rounded-2xl shadow-lg border border-emerald-200",
              title: "text-lg font-semibold",
              htmlContainer: "text-sm",
            },
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-green-50 bg-[url('/leaves-pattern.svg')] bg-cover bg-center py-10 px-4">
      <div className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-green-200 shadow-[0_8px_24px_rgba(34,197,94,0.2)]">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <FaSeedling className="text-4xl text-green-600 animate-bounce" />
          <h2 className="text-4xl font-bold text-emerald-700 mt-2 text-center drop-shadow">
            Update Your Gardening Tip 🌼
          </h2>
          <p className="text-green-800 text-sm mt-2 text-center">
            Share your latest wisdom from the soil — let fellow gardeners grow
            with you!
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 gap-6 text-green-900 font-medium"
        >
          {/* Title */}
          <div>
            <label className="block mb-1">Tip Title</label>
            <input
              defaultValue={title}
              name="title"
              type="text"
              placeholder="e.g., Growing Basil on the Balcony"
              required
              className="w-full p-3 rounded-xl border border-emerald-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
            />
          </div>

          {/* Plant Type */}
          <div>
            <label className="block mb-1">Plant Type / Topic</label>
            <input
              defaultValue={plantType}
              name="plantType"
              type="text"
              placeholder="e.g., Basil, Tomatoes, Succulents"
              required
              className="w-full p-3 rounded-xl border border-emerald-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
            />
          </div>

          {/* Difficulty */}
          <div>
            <label className="block mb-1">Difficulty</label>
            <select
              defaultValue={difficulty}
              name="difficulty"
              required
              className="w-full p-3 rounded-xl border border-emerald-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
            >
              <option value="">Select Level</option>
              <option value="Easy">🌱 Easy</option>
              <option value="Medium">🌿 Medium</option>
              <option value="Hard">🌳 Hard</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1">Description</label>
            <textarea
              defaultValue={description}
              name="description"
              rows="5"
              placeholder="Tell your story... How did you do it?"
              required
              className="w-full p-3 rounded-xl border border-emerald-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner resize-none"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1">Image URL</label>
            <input
              defaultValue={images}
              name="images"
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="w-full p-3 rounded-xl border border-emerald-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1">Category</label>
            <select
              defaultValue={category}
              name="category"
              required
              className="w-full p-3 rounded-xl border border-emerald-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
            >
              <option value="">Select Category</option>
              <option value="Composting">♻️ Composting</option>
              <option value="Plant Care">🌼 Plant Care</option>
              <option value="Vertical Gardening">🏡 Vertical Gardening</option>
              <option value="Herbs & Vegetables">🥕 Herbs & Vegetables</option>
              <option value="Container Gardening">
                🪴 Container Gardening
              </option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block mb-1">Availability</label>
            <select
              defaultValue={availability}
              name="availability"
              required
              className="w-full p-3 rounded-xl border border-emerald-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
            >
              <option value="">Select Visibility</option>
              <option value="Public">🌍 Public</option>
              <option value="Hidden">🙈 Hidden</option>
            </select>
          </div>

          {/* Read-only user info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Your Name</label>
              <input
                defaultValue={userName}
                type="text"
                name="userName"
                readOnly
                className="w-full p-3 bg-gray-100 text-gray-700 rounded-xl border border-emerald-300 shadow-inner"
              />
            </div>
            <div>
              <label className="block mb-1">Your Email</label>
              <input
                defaultValue={userEmail}
                type="email"
                name="userEmail"
                readOnly
                className="w-full p-3 bg-gray-100 text-gray-700 rounded-xl border border-emerald-300 shadow-inner"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              <FaSeedling className="animate-grow text-white" />
              Update Tip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTip;
