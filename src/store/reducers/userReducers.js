import * as userTypes from '../constants/userTypes';

export const createUserReducer = (
  state = { loading: false, message: null, error: null, user: {} },
  { type, payload }
) => {
  switch (type) {
    case userTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case userTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
      };
    case userTypes.USER_REGISTER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        message: null,
      };
    case userTypes.CLEAR_USER_ERRORS:
      return {
        ...state,
        error: null,
      };
    case userTypes.CLEAR_USER_MESSAGES:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};

export const getUserReducer = (
  state = { loading: true, error: null, user: null },
  { type, payload }
) => {
  switch (type) {
    case userTypes.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userTypes.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case userTypes.GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case userTypes.CLEAR_USER_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const loginUserReducer = (
  state = { loading: false, message: null, error: null, user: {}, token: null },
  { type, payload }
) => {
  switch (type) {
    case userTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case userTypes.USER_LOGIN_SUCCESS:
      // window.history.back();
      return {
        ...state,
        loading: false,
        message: payload.message,
        user: payload.data,
        token: payload.token,
      };
    case userTypes.USER_LOGIN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        message: null,
        user: null,
        token: null,
      };
    case userTypes.USER_LOGOUT:
      return {
        ...state,
        error: null,
        loading: false,
        message: null,
        user: null,
        token: null,
      };
    case userTypes.CLEAR_USER_ERRORS:
      return {
        ...state,
        error: null,
      };
    case userTypes.CLEAR_USER_MESSAGES:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};

export const getPlansReducer = (
  state = { loading: true, error: null, plans: [] },
  { type, payload }
) => {
  switch (type) {
    case userTypes.GET_PLANS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case userTypes.GET_PLANS_SUCCESS:
      return {
        ...state,
        loading: false,
        plans: payload,
      };
    case userTypes.GET_PLANS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        plans: [],
      };
    case userTypes.CLEAR_USER_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const userPayReducer = (
  state = { loading: false, message: null, error: null },
  { type, payload }
) => {
  switch (type) {
    case userTypes.USER_PAY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case userTypes.USER_PAY_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
      };
    case userTypes.USER_PAY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        message: null,
      };
    case userTypes.CLEAR_USER_ERRORS:
      return {
        ...state,
        error: null,
      };
    case userTypes.CLEAR_USER_MESSAGES:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};

export const userSubReducer = (
  state = { loading: false, message: null, error: null },
  { type, payload }
) => {
  switch (type) {
    case userTypes.USER_SUB_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case userTypes.USER_SUB_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
      };
    case userTypes.USER_SUB_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        message: null,
      };
    case userTypes.CLEAR_USER_ERRORS:
      return {
        ...state,
        error: null,
      };
    case userTypes.CLEAR_USER_MESSAGES:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};
