import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Test = () => {
  return (
    <Container maxWidth="xl">

      <Grid container spacing={2}>

        <Grid item md={4} xs={12}>
          <Typography variant="h1" component="h1">
                        h1. Heading
          </Typography>
          <p>md=4 xs=12</p>
          <p>велика кнопка</p>
          <Button variant="contained" size="large">надіслати</Button>
        </Grid>

        <Grid item md={4} xs={12}>
          <Typography variant="h2" component="h1">
                        h1. Heading
          </Typography>
          <p>md=4 xs=12</p>
          <p>середня кнопка, можна сайз в пропсах не ставити</p>
          <Button variant="contained">підтримати</Button>
        </Grid>

        <Grid item md={4} xs={12}>
          <Typography variant="h2" component="h2">
                        h2. Heading
          </Typography>
          <p>md=4 xs=12</p>
          <p>маленька кнопка</p>

          <Button variant="contained" size="small" >детальніше</Button>

        </Grid>

        <Grid item md={6} sm={12}>
          <Typography variant="h3" component="h3" color="secondary">
                        h3. Heading
          </Typography>
          <p>Приклад використання іншого коліру в заголовку</p>
          <p>md=6 sm=12</p>
          <Button variant="contained"
            size="small"
            fullWidth={true}>
            Маленька кнопка на весь батьківський контейнер
          </Button>
        </Grid>

        <Grid item md={6} sm={12}>
          <Typography variant="h4" component="h4">
                        h4. Heading
          </Typography>
          <p>md=6 sm=12</p>
          <Button variant="contained"
            fullWidth={true}>
            Середня кнопка на весь батьківський контейнер
          </Button>
        </Grid>

      </Grid>

    </Container>

  );
};