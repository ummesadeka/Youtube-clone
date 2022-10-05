import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copyroght"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2022 Umme Sadeka
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
