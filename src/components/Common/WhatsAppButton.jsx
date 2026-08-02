import { Fab } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <Fab
      href="https://wa.me/919820000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        bgcolor: '#25D366',
        color: '#fff',
        zIndex: 1200,
        '&:hover': { bgcolor: '#1DA851' },
      }}
    >
      <FaWhatsapp size={26} />
    </Fab>
  );
}
