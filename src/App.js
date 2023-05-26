import "./App.css";
import { Toolbar, Grid, AppBar, Container } from "@mui/material";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: "25px" }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam omnis mollitia dolore molestiae, repellendus at aliquid similique dolorum sed facere quibusdam odit. Ut omnis officia unde laudantium, aliquid ad!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam omnis mollitia dolore molestiae, repellendus at aliquid similique dolorum sed facere quibusdam odit. Ut omnis officia unde laudantium, aliquid ad!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Course
              image={Csharp}
              title="Csharp"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam omnis mollitia dolore molestiae, repellendus at aliquid similique dolorum sed facere quibusdam odit. Ut omnis officia unde laudantium, aliquid ad!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Course
              image={KompleWeb}
              title="KompleWeb"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam omnis mollitia dolore molestiae, repellendus at aliquid similique dolorum sed facere quibusdam odit. Ut omnis officia unde laudantium, aliquid ad!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam omnis mollitia dolore molestiae, repellendus at aliquid similique dolorum sed facere quibusdam odit. Ut omnis officia unde laudantium, aliquid ad!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam omnis mollitia dolore molestiae, repellendus at aliquid similique dolorum sed facere quibusdam odit. Ut omnis officia unde laudantium, aliquid ad!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Course
              image={Csharp}
              title="Csharp"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam omnis mollitia dolore molestiae, repellendus at aliquid similique dolorum sed facere quibusdam odit. Ut omnis officia unde laudantium, aliquid ad!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Course
              image={KompleWeb}
              title="KompleWeb"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam omnis mollitia dolore molestiae, repellendus at aliquid similique dolorum sed facere quibusdam odit. Ut omnis officia unde laudantium, aliquid ad!"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
