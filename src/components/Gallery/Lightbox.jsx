import { useEffect, useState, useCallback } from 'react';
import { Box, ImageList, ImageListItem, Modal, IconButton } from '@mui/material';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Lightbox({ images = [] }) {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, prev, next]);

  return (
    <Box>
      <ImageList variant="quilted" cols={4} gap={10} sx={{ gridAutoRows: '160px' }}>
        {images.map((src, i) => (
          <ImageListItem
            key={src + i}
            cols={i === 0 ? 2 : 1}
            rows={i === 0 ? 2 : 1}
            sx={{ cursor: 'pointer', overflow: 'hidden', borderRadius: 1 }}
            onClick={() => setIndex(i)}
          >
            <img
              src={src}
              alt={`Project photo ${i + 1}`}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Modal open={open} onClose={close} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', outline: 'none' }}>
          {open && (
            <img
              src={images[index]}
              alt={`Project photo ${index + 1}`}
              style={{ maxWidth: '90vw', maxHeight: '90vh', display: 'block', borderRadius: 4 }}
            />
          )}
          <IconButton onClick={close} sx={{ position: 'absolute', top: -44, right: 0, color: '#fff' }} aria-label="Close">
            <FaTimes />
          </IconButton>
          <IconButton onClick={prev} sx={{ position: 'absolute', top: '50%', left: -56, transform: 'translateY(-50%)', color: '#fff', display: { xs: 'none', sm: 'flex' } }} aria-label="Previous">
            <FaChevronLeft />
          </IconButton>
          <IconButton onClick={next} sx={{ position: 'absolute', top: '50%', right: -56, transform: 'translateY(-50%)', color: '#fff', display: { xs: 'none', sm: 'flex' } }} aria-label="Next">
            <FaChevronRight />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
}
