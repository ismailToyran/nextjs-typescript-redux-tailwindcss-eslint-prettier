import Button from '@components/button';
import Captcha from '@components/form/captcha';
import Input from '@components/form/input';
import Section from '@components/section';
import Spinner from '@components/spinner';
import { useStore } from '@hooks';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { handleSubmit, register, reset, formState } = useForm<FormValues>();
  const { errors, isSubmitting } = formState;
  const { captchaLoaded, captchaValidated, setCaptchaLoaded, setCaptchaValidated, setCaptchaError, language } = useStore();
  const {
    contactDescription,
    formSuccess,
    formError,
    formTryAgain,
    namePlaceholder,
    nameRequired,
    emailPlaceholder,
    emailRequired,
    emailNotValid,
    messagePlaceholder,
    messageRequired,
    formSubmit
  } = language;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!captchaValidated) {
      return setCaptchaError(true);
    }
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.status === 200) {
      toast.success(formSuccess);
      reset();
      (window as any).grecaptcha.reset();
      setCaptchaValidated(false);
    } else if (response.status === 400) {
      toast.error(formError);
    } else {
      toast.info(formTryAgain);
    }
    return true;
  };

  return (
    <Section id="contact" index={3}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onFocus={() => setCaptchaLoaded(true)}
        className="flex flex-col items-center w-full max-w-xl px-3 py-12 rounded-lg md:px-8 bg-light-bg dark:bg-dark-bg-paper-color shadow-light dark:shadow-dark"
      >
        <p className="mb-8 text-base font-normal text-center text-light-text-primary dark:text-dark-text-primary md:text-lg lg:text-xl">{contactDescription}</p>
        <Input
          error={errors.name}
          label={namePlaceholder}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('name', {
            required: nameRequired
          })}
        />

        <Input
          type="email"
          error={errors.email}
          label={emailPlaceholder}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('email', {
            required: emailRequired,
            pattern: {
              value: /^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,}$/i,
              message: emailNotValid
            }
          })}
        />

        <Input
          error={errors.message}
          label={messagePlaceholder}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('message', {
            required: messageRequired
          })}
        />

        {captchaLoaded && <Captcha />}

        <Button className="mt-4" type="submit">
          {isSubmitting ? <Spinner /> : formSubmit}
        </Button>
      </form>
    </Section>
  );
};

export default Contact;
