import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import RegistrationForm from '../Components/RegistrationForm';
import FacebookButton from '../Components/FacebookButton';

const SignUp = props => {
  const handleSignUp = () => {
    console.log('Sign Up');
  };

  const handleOauth = () => {
    console.log('Oauth');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '10px',
        bgcolor: '#fff',
        py: '6%',
        width: '85%',
        mt: '4%'
      }}
      {...props}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{ fontWeight: 800, mb: '2%' }}
      >
        Signup
      </Typography>
      <Typography variant="body1" component="p" sx={{ mb: '3%', width: '45%' }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard
      </Typography>
      <FacebookButton text="Sign In with Facebook" onClick={handleOauth} />
      <Typography variant="subtitle1" component="p" sx={{ my: '27px' }}>
        or with email
      </Typography>
      <RegistrationForm onSubmit={handleSignUp} />
      <Typography
        variant="subtitle1"
        component="p"
        sx={{ mt: '35px', mb: '30px' }}
      >
        Already have an account?{' '}
        <Link to="/login" style={{ textDecoration: 'none', color: '#FF5943' }}>
          Login
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUp;
