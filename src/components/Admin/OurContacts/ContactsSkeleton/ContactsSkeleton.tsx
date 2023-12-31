import { Grid, Skeleton } from "@mui/material";

export const ContactsSkeleton = (): JSX.Element => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Skeleton height={80} />
      </Grid>
      <Grid item xs={6}>
        <Skeleton height={80} />
      </Grid>
      <Grid item xs={4}>
        <Skeleton height={80} />
      </Grid>
    </Grid>
  );
};
