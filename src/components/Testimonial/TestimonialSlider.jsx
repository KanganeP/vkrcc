import Slider from 'react-slick';
import { Box, Typography, Avatar, Stack, Paper } from '@mui/material';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data/misc.js';

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{ breakpoint: 900, settings: { slidesToShow: 1 } }],
  };

  return (
    <Box sx={{ '& .slick-dots li button:before': { color: '#F59E0B' }, '& .slick-slide': { px: 1.5 } }}>
      <Slider {...settings}>
        {testimonials.map((t) => (
          <Box key={t.name}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', border: '1px solid', borderColor: 'divider' }}>
              <FaQuoteLeft size={24} color="#F59E0B" style={{ marginBottom: 16 }} />
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, mb: 3, minHeight: 80 }}>
                "{t.quote}"
              </Typography>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar sx={{ bgcolor: 'secondary.main' }}>{t.name.split(' ').map((w) => w[0]).join('')}</Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>{t.role}</Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
