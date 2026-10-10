"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Trash2,
  Eye,
  X,
  User,
  CalendarDays,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import { api } from "@/lib/api";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.getMessages();

      if (!response.success) {
        setError(
          response.message || "Failed to load messages."
        );
        return;
      }

      setMessages(response.messages || []);
    } catch (error) {
      console.error("Fetch Messages Error:", error);
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const unreadCount = messages.filter(
    (message) => !message.isRead
  ).length;

  const readCount = messages.length - unreadCount;

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const handleView = async (message) => {
    setSelectedMessage(message);

    // Already read
    if (message.isRead) return;

    try {
      const response = await api.updateMessage(
        message._id,
        {
          isRead: true,
        }
      );

      if (response.success) {
        const updatedMessage =
          response.message || {
            ...message,
            isRead: true,
          };

        setMessages((prev) =>
          prev.map((item) =>
            item._id === message._id
              ? {
                  ...item,
                  isRead: true,
                }
              : item
          )
        );

        setSelectedMessage(updatedMessage);
      }
    } catch (error) {
      console.error("Mark Message Read Error:", error);

      // Even if update fails, show the message
      setMessages((prev) =>
        prev.map((item) =>
          item._id === message._id
            ? {
                ...item,
                isRead: true,
              }
            : item
        )
      );
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      const response = await api.deleteMessage(id);

      if (!response.success) {
        alert(
          response.message || "Failed to delete message."
        );
        return;
      }

      setMessages((prev) =>
        prev.filter((message) => message._id !== id)
      );

      if (selectedMessage?._id === id) {
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error("Delete Message Error:", error);
      alert("Unable to connect to server.");
    }
  };

  return (
    <div className="min-h-screen bg-[#080811] p-6 text-white md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-900/20">
              <MessageSquare size={22} />
            </div>

            <h1 className="text-3xl font-bold">
              Messages
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles
              size={13}
              className="text-violet-400"
            />

            <p className="text-gray-400">
              View messages received from your portfolio
            </p>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Total */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/20">
            <p className="text-sm text-gray-400">
              Total Messages
            </p>

            {loading ? (
              <div className="mt-3 h-8 w-12 animate-pulse rounded-lg bg-white/10" />
            ) : (
              <h2 className="mt-2 text-3xl font-bold">
                {messages.length}
              </h2>
            )}
          </div>

          {/* Unread */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/20">
            <p className="text-sm text-gray-400">
              Unread Messages
            </p>

            {loading ? (
              <div className="mt-3 h-8 w-12 animate-pulse rounded-lg bg-white/10" />
            ) : (
              <h2 className="mt-2 text-3xl font-bold text-violet-400">
                {unreadCount}
              </h2>
            )}
          </div>

          {/* Read */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/20">
            <p className="text-sm text-gray-400">
              Read Messages
            </p>

            {loading ? (
              <div className="mt-3 h-8 w-12 animate-pulse rounded-lg bg-white/10" />
            ) : (
              <h2 className="mt-2 text-3xl font-bold">
                {readCount}
              </h2>
            )}
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex gap-4">
                  <div className="h-11 w-11 shrink-0 animate-pulse rounded-xl bg-white/10" />

                  <div className="flex-1">
                    <div className="h-5 w-64 animate-pulse rounded-lg bg-white/10" />

                    <div className="mt-3 h-4 w-80 animate-pulse rounded-lg bg-white/10" />

                    <div className="mt-3 h-10 w-full animate-pulse rounded-lg bg-white/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : messages.length === 0 ? (

          /* Empty State */
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center">
            <Mail
              size={45}
              className="mx-auto mb-4 text-gray-500"
            />

            <h2 className="text-xl font-semibold">
              No Messages
            </h2>

            <p className="mt-2 text-gray-400">
              You haven't received any messages yet.
            </p>
          </div>

        ) : (

          /* Messages */
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message._id}
                className={`rounded-2xl border p-5 transition duration-300 ${
                  message.isRead
                    ? "border-white/10 bg-white/[0.03] hover:border-violet-500/20"
                    : "border-violet-500/30 bg-violet-500/[0.03] hover:border-violet-500/40"
                }`}
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  {/* Message Info */}
                  <div className="flex min-w-0 gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                      <Mail
                        size={20}
                        className="text-violet-400"
                      />
                    </div>

                    <div className="min-w-0">

                      {/* Subject */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-lg font-semibold">
                          {message.subject ||
                            "No Subject"}
                        </h2>

                        {!message.isRead && (
                          <span className="rounded-full border border-violet-500/20 bg-violet-500/15 px-2.5 py-1 text-xs font-medium text-violet-400">
                            New
                          </span>
                        )}
                      </div>

                      {/* Sender Details */}
                      <div className="mt-2 flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:items-center sm:gap-5">

                        <span className="flex items-center gap-2">
                          <User size={15} />
                          {message.name}
                        </span>

                        <span className="flex items-center gap-2">
                          <Mail size={15} />
                          {message.email}
                        </span>

                        <span className="flex items-center gap-2">
                          <CalendarDays size={15} />
                          {formatDate(
                            message.createdAt
                          )}
                        </span>

                      </div>

                      {/* Preview */}
                      <p className="mt-3 line-clamp-2 text-sm text-gray-400">
                        {message.message}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-2">

                    <button
                      type="button"
                      onClick={() =>
                        handleView(message)
                      }
                      className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-gray-300 transition hover:bg-white/5 hover:text-white"
                    >
                      <Eye size={16} />
                      View
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(message._id)
                      }
                      className="flex items-center gap-2 rounded-lg border border-red-500/20 px-4 py-2.5 text-red-400 transition hover:bg-red-500/10"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

          <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#10101c] shadow-2xl shadow-black/50">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6">

              <div className="min-w-0 pr-4">
                <h2 className="truncate text-xl font-bold">
                  {selectedMessage.subject ||
                    "No Subject"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {formatDate(
                    selectedMessage.createdAt
                  )}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedMessage(null)
                }
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/5 hover:text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">

              {/* Sender Info */}
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="mb-1 text-xs text-gray-500">
                    Name
                  </p>

                  <p className="font-medium">
                    {selectedMessage.name}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="mb-1 text-xs text-gray-500">
                    Email
                  </p>

                  <p className="break-all font-medium">
                    {selectedMessage.email}
                  </p>
                </div>

              </div>

              {/* Message */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">

                <p className="mb-3 text-xs text-gray-500">
                  Message
                </p>

                <p className="whitespace-pre-wrap leading-7 text-gray-300">
                  {selectedMessage.message}
                </p>

              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end border-t border-white/10 p-6">

              <button
                type="button"
                onClick={() =>
                  setSelectedMessage(null)
                }
                className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 font-semibold transition hover:from-violet-500 hover:to-indigo-500"
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

