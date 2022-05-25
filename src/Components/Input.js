import TextField from '@mui/material/TextField';

const Input = props => {
  return <TextField {...props} type={props.type || 'text'} />;
};

export default Input;
