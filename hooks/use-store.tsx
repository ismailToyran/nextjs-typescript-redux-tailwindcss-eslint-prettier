import { useSelector, useDispatch } from 'react-redux';

import {
  State,
  RECEIVE_CAPTCHA_LOADED,
  RECEIVE_CAPTCHA_VALIDATED,
  RECEIVE_CAPTCHA_ERROR,
  TOGGLE_MOBILE_MENU
} from '@components/store';

const useStore = () => {
  const dispatch = useDispatch();
  const { language, settings, captcha, mobileMenu } = useSelector((state: State) => state);
  const { captchaLoaded, captchaValidated, captchaError } = captcha;

  const setCaptchaLoaded = (val: boolean) => dispatch({ type: RECEIVE_CAPTCHA_LOADED, payload: val });
  const setCaptchaValidated = (val: boolean) => dispatch({ type: RECEIVE_CAPTCHA_VALIDATED, payload: val });
  const setCaptchaError = (val: boolean) => dispatch({ type: RECEIVE_CAPTCHA_ERROR, payload: val });

  const toggleMobileMenu = () => dispatch({ type: TOGGLE_MOBILE_MENU, payload: !mobileMenu });
  const openMobileMenu = () => dispatch({ type: TOGGLE_MOBILE_MENU, payload: true });
  const closeMobileMenu = () => dispatch({ type: TOGGLE_MOBILE_MENU, payload: false });

  return {
    language,
    settings,
    captchaLoaded,
    setCaptchaLoaded,
    captchaValidated,
    setCaptchaValidated,
    captchaError,
    setCaptchaError,
    mobileMenu,
    toggleMobileMenu,
    openMobileMenu,
    closeMobileMenu
  };
};

export default useStore;
