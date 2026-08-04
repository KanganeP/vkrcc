import { useEffect, useState } from 'react';
import {
  Box, Container, Grid, Typography, TextField, Button, Stack, Paper, IconButton, Snackbar, Alert,
} from '@mui/material';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import PageBreadcrumb from '../../components/Common/PageBreadcrumb.jsx';
import SectionHeading from '../../components/Common/SectionHeading.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | ApexCon RCC Constructions';
  }, []);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend, email service, or a form provider (Formspree, EmailJS, etc.)
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', projectType: '', message: '' });
  };

  return (
    <Box>
      <PageBreadcrumb items={[{ label: 'Contact' }]} />
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Let's talk" title="Get In Touch" subtitle="Tell us about your site and we'll get back with a free estimate, usually within 48 hours." />

          <Grid container spacing={5}>
            <Grid item xs={12} md={7}>
              <Paper elevation={2} sx={{ p: { xs: 3, md: 4 } }}>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Full Name" fullWidth required value={form.name} onChange={handleChange('name')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Phone" fullWidth required value={form.phone} onChange={handleChange('phone')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Email" type="email" fullWidth required value={form.email} onChange={handleChange('email')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Project Type" fullWidth placeholder="Residential / Commercial / Industrial" value={form.projectType} onChange={handleChange('projectType')} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Message" fullWidth required multiline rows={4} value={form.message} onChange={handleChange('message')} />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={5}>
              <Stack spacing={2.5}>
                {[
                  [FaMapMarkerAlt, 'Office Address', '204, Sai Chambers, Andheri East, Mumbai 400069'],
                  [FaPhoneAlt, 'Phone', '+91 982677589'],
                  [FaEnvelope, 'Email', 'contact@apexconrcc.in'],
                  [FaClock, 'Office Hours', 'Mon – Sat, 9:00 AM – 6:30 PM'],
                ].map(([Icon, label, value]) => (
                  <Stack direction="row" spacing={2} alignItems="flex-start" key={label}>
                    <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: 'rgba(245,158,11,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'primary.main', flexShrink: 0 }}>
                      <Icon size={16} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{label}</Typography>
                      <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>{value}</Typography>
                    </Box>
                  </Stack>
                ))}

                <Stack direction="row" spacing={1.5}>
                  <Button
                    href="https://wa.me/919822677589"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    startIcon={<FaWhatsapp />}
                    sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#1DA851' } }}
                  >
                    WhatsApp Us
                  </Button>
                </Stack>

                <Stack direction="row" spacing={1}>
                  {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                    <IconButton key={i} sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
                      <Icon size={14} />
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Box
              component="iframe"
              title="Office location map"
              src="https://maps.google.com/maps?q=Andheri%20East%2C%20Mumbai&output=embed"
              loading="lazy"
              sx={{ width: '100%', height: 360, border: 0, borderRadius: 2 }}
            />
          </Box>
        </Container>
      </Box>

      <Snackbar open={submitted} autoHideDuration={5000} onClose={() => setSubmitted(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" onClose={() => setSubmitted(false)} variant="filled">
          Thanks — we've received your message and will get back to you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
}
