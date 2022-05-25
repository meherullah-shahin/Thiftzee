import Grid from '@mui/material/Grid';

const About = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        style={{
          maxWidth: '1240px',
          padding: '0 5%',
          marginTop: '20px',
          marginBottom: '20px'
        }}
        className="filter-container"
      >
        <h3>About ThriftZee</h3>
      </Grid>
    </>
  );
};

export default About;
