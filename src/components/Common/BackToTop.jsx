import { useEffect, useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Zoom in={visible}>
      <Fab
        size="medium"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        sx={{
          position: 'fixed',
          bottom: 96,
          right: 24,
          bgcolor: 'secondary.main',
          color: '#fff',
          zIndex: 1200,
          '&:hover': { bgcolor: 'secondary.dark' },
        }}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </Fab>
    </Zoom>
  );
}
