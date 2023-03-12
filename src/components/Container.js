import { Box, Stack, Switch, Typography } from '@mui/material';
import { Container } from '@mui/system';

function PageContainer({ children }) {
  return (
    <Box>
      <Container maxWidth='sm'>
        <Stack mb={4} direction='row' spacing={1} alignItems='center'>
          <Typography>Dark mode</Typography>
          <Switch checked={false} />
        </Stack>
        {children}
      </Container>
    </Box>
  );
}

export default PageContainer;
