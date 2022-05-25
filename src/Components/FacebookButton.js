import Button from './Button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const FacebookButton = props => {
  return (
    <Button
      {...props}
      startIcon={<FacebookRoundedIcon />}
      sx={{
        bgcolor: '#196AE2',
        width: '360px',
        textTransform: 'none',
        borderRadius: '30px',
        height: '50px',
        fontSize: '18px',
        fontWeight: '700',
        ':hover': {
          bgcolor: '#192be2'
        }
      }}
    />
  );
};

export default FacebookButton;
