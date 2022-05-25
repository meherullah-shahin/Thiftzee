import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography, Box } from '@mui/material';
import EmailInput from './EmailInput';
import PhoneInput from './PhoneInput';
import PasswordInput from './PasswordInput';
import Button from './Button';

const RegistrationForm = ({ onSubmit, classes, validationSchema }) => {
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
          name="phone"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              placeholder="Phone"
              value={value}
              onChange={onChange}
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone.message : null}
              sx={{ mb: '19px' }}
            />
          )}
        />
        <Controller
          name="Choose Password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              placeholder="Password"
              value={value}
              onChange={onChange}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : null}
              sx={{ mb: '20px' }}
            />
          )}
        />
        <Typography variant="body2" component="p" sx={{ mb: '30px' }}>
          By proceeding you also agree to the terms of service and privacy
          policy.
        </Typography>
        <Button
          type="submit"
          text="Sign Up"
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

export default RegistrationForm;
