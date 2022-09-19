import * as podcastTypes from '../constants/podcastTypes';
import axios from 'axios';
import { HOMESCREEN_API_URL, BASE_URL } from '../../utils/constants';

export const getPodcasts = () => async (dispatch) => {
  try {
    dispatch({
      type: podcastTypes.GET_PODCASTS_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}podcasts`,
      config
    );

    dispatch({
      type: podcastTypes.GET_PODCASTS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: podcastTypes.GET_PODCASTS_ERROR,
      payload: error && error.message,
    });
  }
};

export const getSinglePodcasts = (collectionId) => async (dispatch) => {
  try {
    dispatch({
      type: podcastTypes.GET_SINGLE_PODCASTS_REQUEST,
    });

    const headers = {
      'Access-Control-Allow-Origin': '*',
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}podcast/${collectionId}`,
      headers
    );

    dispatch({
      type: podcastTypes.GET_SINGLE_PODCASTS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: podcastTypes.GET_SINGLE_PODCASTS_ERROR,
      payload: error && error.message,
    });
  }
};

export const play = (episode) => (dispatch) => {
  const episodeDetails = getEpisodeDetails(episode);

  try {
    dispatch({
      type: podcastTypes.PLAY_EPISODE_REQUEST,
      payload: episodeDetails,
    });

    dispatch({
      type: podcastTypes.PLAY_EPISODE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: podcastTypes.PLAY_EPISODE_ERROR,
    });
  }
};

export const pause = () => (dispatch) => {
  dispatch({
    type: podcastTypes.PAUSE_EPISODE,
  });
};

export const getEpisodeDetails = (episode) => {
  // episode object has so many properties, take only relevant ones
  const {
    episodeUrl,
    artworkUrl60,
    trackId,
    trackTimeMillis,
    trackName,
    shortDescription,
    collectionName,
  } = episode;

  const episodeDetails = {
    episodeUrl,
    artworkUrl60,
    trackId,
    trackTimeMillis,
    trackName,
    shortDescription,
    collectionName,
  };
  return episodeDetails;
};
