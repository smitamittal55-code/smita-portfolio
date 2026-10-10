"use client";

import { useState } from "react";
import {
  Save,
  User,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Image as ImageIcon,
} from "lucide-react";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "Smita Mittal",
    title: "Full Stack Developer",
    email: "smitamittal55@gmail.com",
    phone: "",
    location: "Gwalior, Madhya Pradesh",
    bio: "BCA student and passionate Full Stack Developer focused on building modern, responsive and user-friendly web applications.",
    profileImage: "",
    github: "",
    linkedin: "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Profile:", formData);

    setSaved(true);

    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-[#080811] text-white p-6 md:p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">

            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
              <User size={22} />
            </div>

            <h1 className="text-3xl font-bold">
              Profile
            </h1>

          </div>

          <p className="text-gray-400">
            Manage your portfolio profile information
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Profile Preview */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 h-fit">

            <div className="text-center">

              {/* Profile Image */}
              <div className="mx-auto w-32 h-32 rounded-full border-4 border-violet-500/30 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 flex items-center justify-center overflow-hidden">

                {formData.profileImage ? (
                  <img
                    src={formData.profileImage}
                    alt={formData.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User
                    size={55}
                    className="text-violet-400"
                  />
                )}

              </div>

              <h2 className="text-xl font-bold mt-5">
                {formData.name || "Your Name"}
              </h2>

              <p className="text-violet-400 mt-1">
                {formData.title || "Professional Title"}
              </p>

              <div className="mt-5 space-y-3 text-sm text-gray-400">

                <p className="flex items-center justify-center gap-2">
                  <Mail size={15} />
                  {formData.email || "Email"}
                </p>

                <p className="flex items-center justify-center gap-2">
                  <MapPin size={15} />
                  {formData.location || "Location"}
                </p>

              </div>

            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Professional Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Developer"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
                    />
                  </div>
                </div>

              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Location
                </label>

                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Gwalior, Madhya Pradesh"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
                  />
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Bio
                </label>

                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Write a short professional bio..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition resize-none"
                />
              </div>

              {/* Profile Image */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Profile Image URL
                </label>

                <div className="relative">
                  <ImageIcon
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="url"
                    name="profileImage"
                    value={formData.profileImage}
                    onChange={handleChange}
                    placeholder="https://example.com/profile.jpg"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
                  />
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Enter a publicly accessible image URL.
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Social Links
                </h3>

                <div className="space-y-4">

                  {/* GitHub */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-sm">
                      GH
                    </span>

                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      placeholder="GitHub profile URL"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-sm">
                      in
                    </span>

                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="LinkedIn profile URL"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
                    />
                  </div>

                </div>
              </div>

              {/* Save */}
              <div className="pt-4">

                <button
                  type="submit"
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition flex items-center justify-center gap-2 font-semibold"
                >
                  <Save size={18} />
                  Save Profile
                </button>

                {saved && (
                  <p className="text-center text-sm text-green-400 mt-3">
                    Profile saved successfully.
                  </p>
                )}

              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}