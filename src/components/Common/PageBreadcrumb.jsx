import { Box, Breadcrumbs, Typography, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';

export default function PageBreadcrumb({ items = [] }) {
  return (
    <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: 1.5 }}>
      <Container maxWidth="lg">
        <Breadcrumbs separator={<FaChevronRight size={10} />} aria-label="breadcrumb">
          <Typography
            component={RouterLink}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary', textDecoration: 'none', fontSize: '0.85rem', '&:hover': { color: 'primary.main' } }}
          >
            <FaHome size={12} /> Home
          </Typography>
          {items.map((item, i) =>
            item.to ? (
              <Typography
                key={item.label}
                component={RouterLink}
                to={item.to}
                sx={{ color: 'text.secondary', textDecoration: 'none', fontSize: '0.85rem', '&:hover': { color: 'primary.main' } }}
              >
                {item.label}
              </Typography>
            ) : (
              <Typography key={item.label} sx={{ color: 'text.primary', fontSize: '0.85rem', fontWeight: 600 }}>
                {item.label}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </Container>
    </Box>
  );
}
