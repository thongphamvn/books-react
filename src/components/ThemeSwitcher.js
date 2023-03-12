import { Switch, Typography } from '@mui/material';
import { Stack } from '@mui/system';

function ThemeSwitcher() {
  return (
    <Stack mb={4} direction='row' spacing={1} alignItems='center'>
      <Typography>Dark mode</Typography>
      <Switch checked={false} onClick={() => {}} />
    </Stack>
  );
}

export default ThemeSwitcher;
