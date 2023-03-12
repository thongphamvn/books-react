import { Box } from '@mui/material';
import { Container } from '@mui/system';
import ThemeSwitcher from './ThemeSwitcher';

function PageContainer({ children }) {
  return (
    <Box>
      <Container maxWidth='sm'>
        <ThemeSwitcher />
        {children}
      </Container>
    </Box>
  );
}

export default PageContainer;
