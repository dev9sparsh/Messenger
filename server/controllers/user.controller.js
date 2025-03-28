import User from "../models/user.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); // find all users except the logged in user

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error(error?.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
