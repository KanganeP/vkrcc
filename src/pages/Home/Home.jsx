import { useEffect } from 'react';
import { Box, Container, Grid, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import SectionHeading from '../../components/Common/SectionHeading.jsx';
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import BlogCard from '../../components/BlogCard/BlogCard.jsx';
import TestimonialSlider from '../../components/Testimonial/TestimonialSlider.jsx';
import CTA from '../../components/CTA/CTA.jsx';

import { services } from '../../data/services.js';
import { projects } from '../../data/projects.js';
import { blogs } from '../../data/blogs.js';
import { stats, processSteps } from '../../data/misc.js';

const WHY_US = [
  'Engineering Expertise — Years of practical structural design experience.',
  'Safe & Practical Design — Structures designed with safety, functionality, and constructability in mind.',
  'Economical Solutions — Optimized structural designs without compromising safety.',
  'On-Time Delivery — Projects completed on schedule, with no delays.',
  'Professional Accountability — Clear drawings, calculations, and technical guidance for every project.',
  'Design Experience You Can Trust — From individual residential buildings to complex institutional, commercial, and specialized structures.',
];

export default function Home() {
  useEffect(() => {
    document.title = 'VK RCC | RCC & Civil Construction Agency in Nashik';
  }, []);

  return (
    <Box>
      <HeroSection />

      {/* Stats */}
      <Box sx={{ bgcolor: 'secondary.main', py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {stats.map((s) => (
              <Grid item xs={6} md={3} key={s.label}>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, color: '#fff' }}>
                  {s.value}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem' }}>{s.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Company introduction + Why choose us */}
      <Box sx={{ py: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200"
                  alt="VK RCC construction site"
                  loading="lazy"
                  sx={{ width: '100%', borderRadius: 2, boxShadow: 4 }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <SectionHeading
                eyebrow="Who we are"
                title="23+ Years of Overall Experience in RCC"
                subtitle="A long-standing journey in structural engineering, covering diverse building types and structural requirements."
              />
              <Stack spacing={1.5}>
                {WHY_US.map((item) => (
                  <Stack direction="row" spacing={1.5} alignItems="center" key={item}>
                    <FaCheckCircle color="#F59E0B" />
                    <Typography sx={{ fontSize: '0.92rem' }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} to="/about" endIcon={<FaArrowRight size={12} />} variant="contained" color="primary" sx={{ mt: 4 }}>
                More About Us
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services overview */}
      <Box sx={{ py: { xs: 8, md: 11 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="What we do" title="Our Services" subtitle="we provide RCC structural design and engineering services for diverse building types." align="center" />
          <Grid container spacing={3}>
            {services.slice(0, 6).map((s, i) => (
              <Grid item xs={12} sm={6} md={4} key={s.id}>
                <ServiceCard service={s} index={i} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button component={RouterLink} to="/services" variant="outlined" color="primary" endIcon={<FaArrowRight size={12} />}>
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured projects */}
      <Box sx={{ py: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Our work" title="Featured Projects" subtitle="A selection of recent residential, commercial, and industrial builds." align="center" />
          <Grid container spacing={3}>
            {projects.slice(0, 3).map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={p.id}>
                <ProjectCard project={p} index={i} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button component={RouterLink} to="/projects" variant="outlined" color="primary" endIcon={<FaArrowRight size={12} />}>
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Construction process preview */}
      <Box sx={{ py: { xs: 8, md: 11 }, bgcolor: '#1F2937' }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="How we work" title="Our RCC Design Process" light align="center" />
          <Grid container spacing={2}>
            {processSteps.slice(0, 4).map((step, i) => (
              <Grid item xs={6} md={3} key={step.title}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <Typography sx={{ fontFamily: '"Roboto Mono", monospace', color: 'primary.main', fontSize: '1.4rem', mb: 1 }}>
                    0{i + 1}
                  </Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 600, mb: 0.5, fontSize: '0.95rem' }}>{step.title}</Typography>
                  <Typography sx={{ color: 'rgba(245,245,245,0.65)', fontSize: '0.82rem' }}>{step.text}</Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button component={RouterLink} to="/process" variant="outlined" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }} endIcon={<FaArrowRight size={12} />}>
              See Full Process
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Client notes" title="What Our Clients Say" align="center" />
          <TestimonialSlider />
        </Container>
      </Box>

      {/* Latest blogs */}
      <Box sx={{ py: { xs: 8, md: 11 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="From the blog" title="Latest Articles" align="center" />
          <Grid container spacing={3}>
            {blogs.slice(0, 3).map((b, i) => (
              <Grid item xs={12} sm={6} md={4} key={b.id}>
                <BlogCard blog={b} index={i} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CTA />
    </Box>
  );
}
