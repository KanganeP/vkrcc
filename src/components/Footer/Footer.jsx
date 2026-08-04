import { Box, Container, Grid, Typography, Stack, IconButton, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#1F2937', color: '#F5F5F5', pt: 8, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800, fontSize: '1.2rem', mb: 2 }}>
              APEXCON <Box component="span" sx={{ color: 'primary.main' }}>RCC</Box>
            </Typography>
            <Typography sx={{ color: 'rgba(245,245,245,0.7)', fontSize: '0.9rem', lineHeight: 1.7, mb: 3 }}>
              RCC and civil construction contractors serving Mumbai and Navi
              Mumbai since 2008. Structural work, finishing, and turnkey
              projects delivered by our own crews.
            </Typography>
            <Stack direction="row" spacing={1}>
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{ bgcolor: 'rgba(245,245,245,0.08)', color: '#F5F5F5', '&:hover': { bgcolor: 'primary.main', color: '#1F2937' } }}
                >
                  <Icon size={14} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography sx={{ fontWeight: 700, mb: 2, fontSize: '0.95rem' }}>Quick Links</Typography>
            <Stack spacing={1}>
              {[
                ['Home', '/'], ['Services', '/services'], ['Process', '/process'],
                ['Projects', '/projects'], ['About', '/about'], ['Blog', '/blogs'],
              ].map(([label, to]) => (
                <Typography
                  key={to}
                  component={RouterLink}
                  to={to}
                  sx={{ color: 'rgba(245,245,245,0.7)', textDecoration: 'none', fontSize: '0.85rem', '&:hover': { color: 'primary.main' } }}
                >
                  {label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography sx={{ fontWeight: 700, mb: 2, fontSize: '0.95rem' }}>Services</Typography>
            <Stack spacing={1}>
              {['RCC Construction', 'Residential Construction', 'Commercial Construction', 'Renovation', 'Waterproofing'].map((s) => (
                <Typography
                  key={s}
                  component={RouterLink}
                  to="/services"
                  sx={{ color: 'rgba(245,245,245,0.7)', textDecoration: 'none', fontSize: '0.85rem', '&:hover': { color: 'primary.main' } }}
                >
                  {s}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography sx={{ fontWeight: 700, mb: 2, fontSize: '0.95rem' }}>Contact</Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <FaMapMarkerAlt style={{ marginTop: 3, flexShrink: 0 }} color="#F59E0B" />
                <Typography sx={{ color: 'rgba(245,245,245,0.7)', fontSize: '0.85rem' }}>
                  204, Sai Chambers, Andheri East, Mumbai 400069
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <FaPhoneAlt color="#F59E0B" />
                <Typography sx={{ color: 'rgba(245,245,245,0.7)', fontSize: '0.85rem' }}>+91 98200 00000</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <FaEnvelope color="#F59E0B" />
                <Typography sx={{ color: 'rgba(245,245,245,0.7)', fontSize: '0.85rem' }}>contact@apexconrcc.in</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(245,245,245,0.1)' }} />

        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={1}>
          <Typography sx={{ color: 'rgba(245,245,245,0.5)', fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} ApexCon RCC Constructions. All rights reserved.
          </Typography>
          <Typography sx={{ color: 'rgba(245,245,245,0.5)', fontSize: '0.78rem' }}>
            MahaRERA Registered · ISO 9001:2015 Certified
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
