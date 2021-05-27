import SendGrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

const Send = async (req: NextApiRequest, res: NextApiResponse) => {
  SendGrid.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, message } = req.body;

  const content = {
    to: 'ismailtoyran@gmail.com',
    from: { name, email: 'info@ismailtoyran.com' },
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>${message}</p>`
  };

  try {
    await SendGrid.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
    if (error.response) {
      // eslint-disable-next-line no-console
      console.error(error.response.body);
    }
  }
};

export default Send;
