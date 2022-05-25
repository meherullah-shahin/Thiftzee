import { Typography } from '@mui/material';
import EmailInput from '../Components/EmailInput';
import Button from '../Components/Button';

const Newsletter = () => {
  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        sx={{ pt: '5%', pb: '1%', fontWeight: '800' }}
      >
        Stay Up-To-date on ThriftD
      </Typography>
      <Typography variant="body1" component="p" sx={{ width: '50%' }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer
      </Typography>
      <form
        style={{
          display: 'flex',
          marginTop: '2%',
          marginBottom: '5%',
          width: '55%'
        }}
      >
        <EmailInput
          className="subscribe"
          placeholder="Enter your email address"
          sx={{ width: '80%' }}
        />
        <Button
          text="Subscribe"
          sx={{
            borderRadius: '0 10px 10px 0',
            textTransform: 'none',
            width: '20%'
          }}
        />
      </form>
    </>
  );
};

export default Newsletter;
