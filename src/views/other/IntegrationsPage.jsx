// material-ui
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const IntegrationsPage = () => (
  <MainCard title="Active Campaign">
    <Typography variant="body2">Sync your contacts and manage marketing campaigns directly through Active Campaign.</Typography>
    <Button>Sync</Button>
  </MainCard>
);

export default IntegrationsPage;
