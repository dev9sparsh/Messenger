import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
      default: [],
    },
  ],
  // createdAt and updatedAt fields are automatically
}, { timestamps: true});

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation;