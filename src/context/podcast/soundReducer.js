export const EPISODE_PLAY_REQUEST = 'EPISODE_PLAY_REQUEST'
export const EPISODE_PLAYING = 'EPISODE_PLAYING'
export const EPISODE_PAUSE = 'EPISODE_PAUSE'
export const CURRENT_AUDIO = 'CURRENT_AUDIO'

export const soundInitialState = {
  loading: false,
  isPlaying: undefined,
  episode: {},
  currentAudio: null,
  error: false,
}

const soundReducer = (state, action) => {
  switch (action.type) {
    case EPISODE_PLAY_REQUEST:
      return {
        ...state,
        episode: action.payload,
        loading: true,
      }

    case EPISODE_PLAYING:
      return {
        ...state,
        isPlaying: true,
        loading: false,
      }
    case CURRENT_AUDIO:
      return {
        ...state,
        currentAudio: action.payload,
      }
    case EPISODE_PAUSE:
      return {
        ...state,
        isPlaying: false,
      }

    default:
      return state
  }
}

export default soundReducer
