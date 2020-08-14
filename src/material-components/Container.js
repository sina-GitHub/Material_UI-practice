import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Container fixed>
        {/* it chooses the dimension */}
        <Typography
          component='div'
          style={{ backgroundColor: "#333", height: "100vh" }}
        />
      </Container>
    </div>
  );
}

export default App;
