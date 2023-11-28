import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    channelName: {
      type: String,
      required: true,
    },
    uri: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    musicName: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    comments: {
      type: Number,
      required: true,
    },
    avatarUri: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
mongoose.models = {};
export default mongoose.model("Video", VideoSchema);
