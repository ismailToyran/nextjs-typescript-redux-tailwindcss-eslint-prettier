import Error from '@components/form/error';
import { useStore } from '@hooks';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = () => {
  const { captchaError, setCaptchaValidated, setCaptchaError, language } = useStore();
  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
  return (
    <>
      <div style={{ transform: 'scale(0.8)', marginTop: '12px' }}>
        <ReCAPTCHA
          sitekey={sitekey}
          // style={{ transform: 'scale(0.8)', marginTop: '12px' }}
          onChange={(token) => {
            if (token) {
              setCaptchaValidated(true);
              setCaptchaError(false);
            }
          }}
          onErrored={() => setCaptchaValidated(false)}
          onExpired={() => setCaptchaValidated(false)}
        />
      </div>
      {captchaError && <Error>{language.recaptchaError}</Error>}
    </>
  );
};

export default Captcha;
