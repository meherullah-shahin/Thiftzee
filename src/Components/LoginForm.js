import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import Button from './Button';

const LoginForm = ({ onSubmit, classes, validationSchema }) => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(validationSchema) });

  return (
    <form
      classes={classes}
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Box display="flex" flexDirection="column" width="360px">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <EmailInput
              className="EmailInput"
              placeholder="Email"
              value={value}
              onChange={onChange}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : null}
              sx={{ mb: '19px' }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              placeholder="Password"
              value={value}
              onChange={onChange}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : null}
              sx={{ mb: '30px' }}
            />
          )}
        />
        <Button
          type="submit"
          text="Sign In"
          sx={{
            textTransform: 'none',
            borderRadius: '30px',
            height: '50px',
            fontSize: '18px',
            fontWeight: '700'
          }}
        />
      </Box>
    </form>
  );
};

export default LoginForm;
