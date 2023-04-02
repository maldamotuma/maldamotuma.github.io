import { Box } from '@mui/material'
import Backtxt from './newskill/Backtxt';
import SkillTabs from './newskill/smallskill/SkillTabs';

const SmallSkill = () => {
  return (
    <Box sx={{
        bgcolor: '#0A1929',
        position: 'relative'
    }}>
        <Backtxt />
        <SkillTabs />
    </Box>
  )
}

export default SmallSkill;