import { RECEIVE_CAPTCHA_ERROR, RECEIVE_CAPTCHA_LOADED, RECEIVE_CAPTCHA_VALIDATED, State, TOGGLE_MOBILE_MENU } from '@components/store';
import { useDispatch, useSelector } from 'react-redux';

const useStore = () => {
  const dispatch = useDispatch();
  const { language, settings, assets, captcha, mobileMenu } = useSelector((state: State) => state);
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
    assets,
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
