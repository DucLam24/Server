import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
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
      type: String,
      required: true,
    },
    comments: {
      type: String,
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