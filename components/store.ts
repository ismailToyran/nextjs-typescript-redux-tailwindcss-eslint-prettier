import { IAssets, ILanguageFields, ISettingsFields } from '@components/contentful/types/contentful';
import { Context, createWrapper, HYDRATE } from 'next-redux-wrapper';
import { AnyAction, createStore, Store } from 'redux';

export const RECEIVE_LANGUAGE = 'RECEIVE_LANGUAGE';
export const RECEIVE_SETTINGS = 'RECEIVE_SETTINGS';
export const RECEIVE_ASSETS = 'RECEIVE_ASSETS';
export const RECEIVE_CAPTCHA_LOADED = 'RECEIVE_CAPTCHA_LOADED';
export const RECEIVE_CAPTCHA_VALIDATED = 'RECEIVE_CAPTCHA_VALIDATED';
export const RECEIVE_CAPTCHA_ERROR = 'RECEIVE_CAPTCHA_ERROR';
export const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';
export const SET_LAYOUT_ANIMATION = 'SET_LAYOUT_ANIMATION';

export interface State {
  language: ILanguageFields;
  settings: ISettingsFields;
  assets: IAssets[];
  captcha: {
    captchaLoaded: boolean;
    captchaValidated: boolean;
    captchaError: boolean;
  };
  mobileMenu: boolean;
  layoutAnimation: boolean;
}

export const initialState: State = {
  language: {} as ILanguageFields,
  settings: {} as ISettingsFields,
  assets: [] as IAssets[],
  captcha: {
    captchaLoaded: false,
    captchaValidated: false,
    captchaError: false
  },
  mobileMenu: false,
  layoutAnimation: false
};

// create your reducer
const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case RECEIVE_LANGUAGE:
      return { ...state, language: action.payload };
    case RECEIVE_SETTINGS:
      return { ...state, settings: action.payload };
    case RECEIVE_ASSETS:
      return { ...state, assets: action.payload };
    case RECEIVE_CAPTCHA_LOADED:
      return {
        ...state,
        captcha: { ...state.captcha, captchaLoaded: action.payload }
      };
    case RECEIVE_CAPTCHA_VALIDATED:
      return {
        ...state,
        captcha: { ...state.captcha, captchaValidated: action.payload }
      };
    case RECEIVE_CAPTCHA_ERROR:
      return {
        ...state,
        captcha: { ...state.captcha, captchaError: action.payload }
      };
    case TOGGLE_MOBILE_MENU:
      return { ...state, mobileMenu: action.payload };
    case SET_LAYOUT_ANIMATION:
      return { ...state, layoutAnimation: action.payload };
    default:
      return state;
  }
};

// create a makeStore function
const makeStore = (_context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, {
  //   debug: true,
});
