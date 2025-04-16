import { CHANNEL_YOUTUBE_SET } from "../actions/actionType";

const initialChannelYoutube = {
  isLoadingChannel: true,
  channels: [],
  errorChannel: "",
};

const channelYoutubeReducer = (state = initialChannelYoutube, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANNEL_YOUTUBE_SET:
      return {
        ...state,
        isLoadingChannel: false,
        channels: payload,
        errorChannel: "",
      };
    default:
      return state;
  }
};

export default channelYoutubeReducer;
