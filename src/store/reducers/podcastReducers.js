import * as podcastTypes from '../constants/podcastTypes';

export const getPodcastReducer = (
  state = { loading: true, error: null, podcasts: [] },
  { type, payload }
) => {
  switch (type) {
    case podcastTypes.GET_PODCASTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case podcastTypes.GET_PODCASTS_SUCCESS:
      return {
        ...state,
        loading: false,
        podcasts: payload,
      };
    case podcastTypes.GET_PODCASTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const getSinglePodcastsReducer = (
  state = { loading: true, error: null, podcast: [] },
  { type, payload }
) => {
  switch (type) {
    case podcastTypes.GET_SINGLE_PODCASTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case podcastTypes.GET_SINGLE_PODCASTS_SUCCESS:
      return {
        ...state,
        loading: false,
        podcast: payload,
      };
    case podcastTypes.GET_SINGLE_PODCASTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const playEpisodeReducer = (
  state = { loading: true, error: null, isPlaying: false, episode: {} },
  { type, payload }
) => {
  switch (type) {
    case podcastTypes.PLAY_EPISODE_REQUEST:
      return {
        ...state,
        episode: payload,
        loading: true,
      };
    case podcastTypes.PLAY_EPISODE_SUCCESS:
      return {
        ...state,
        isPlaying: true,
        loading: false,
      };
    case podcastTypes.PLAY_EPISODE_ERROR:
      return {
        ...state,
        episode: payload,
        loading: false,
        error: payload,
      };

    case podcastTypes.PAUSE_EPISODE:
      return {
        ...state,
        isPlaying: false,
      };
    default:
      return state;
  }
};
