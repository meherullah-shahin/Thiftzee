import MuiButton from '@mui/material/Button';

const Button = props => {
  return (
    <MuiButton
      {...props}
      type={props.type || 'button'}
      variant={props.variant || 'contained'}
      color={props.color}
    >
      {props.text}
    </MuiButton>
  );
};

export default Button;
