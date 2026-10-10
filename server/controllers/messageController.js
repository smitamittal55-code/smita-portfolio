const Message = require("../models/Message");

// ===============================
// GET ALL MESSAGES
// ===============================
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    console.error("Get Messages Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch messages",
    });
  }
};

// ===============================
// GET SINGLE MESSAGE
// ===============================
const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    res.status(200).json({
      success: true,
      message,
    });
  } catch (error) {
    console.error("Get Message Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch message",
    });
  }
};

// ===============================
// CREATE MESSAGE
// ===============================
const createMessage = async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    // Required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("Create Message Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};

// ===============================
// MARK MESSAGE AS READ / UNREAD
// ===============================
const updateMessageStatus = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    const { isRead } = req.body;

    if (isRead !== undefined) {
      message.isRead = isRead === true || isRead === "true";
    }

    const updatedMessage = await message.save();

    res.status(200).json({
      success: true,
      message: "Message status updated successfully",
      data: updatedMessage,
    });
  } catch (error) {
    console.error("Update Message Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update message",
    });
  }
};

// ===============================
// DELETE MESSAGE
// ===============================
const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    await message.deleteOne();

    res.status(200).json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (error) {
    console.error("Delete Message Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete message",
    });
  }
};

// ===============================
// EXPORT
// ===============================
module.exports = {
  getMessages,
  getMessageById,
  createMessage,
  updateMessageStatus,
  deleteMessage,
};