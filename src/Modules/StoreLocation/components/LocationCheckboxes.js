import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function LocationCheckboxes({ locations, handleChange }) {
  return (
    <FormGroup>
      {locations.map(location => (
        <FormControlLabel
          key={location.id}
          control={<Checkbox />}
          label={location.name}
          value={location.id}
          labelPlacement="start"
          onChange={handleChange}
          sx={{
            borderBottom: '1px solid #000',
            justifyContent: 'space-between',
            ml: 0
          }}
        />
      ))}
    </FormGroup>
  );
}
