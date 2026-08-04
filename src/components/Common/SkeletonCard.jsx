import { Card, Skeleton, CardContent } from '@mui/material';

export default function SkeletonCard() {
  return (
    <Card sx={{ height: '100%' }}>
      <Skeleton variant="rectangular" height={200} animation="wave" />
      <CardContent>
        <Skeleton variant="text" width="70%" height={28} animation="wave" />
        <Skeleton variant="text" width="90%" animation="wave" />
        <Skeleton variant="text" width="60%" animation="wave" />
      </CardContent>
    </Card>
  );
}
