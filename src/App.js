import React, {Component, component} from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./components/image-upload.component";

class App extends Component {
  render(){ 
  return (
    <div className="container">
      <h4>Face Analysis</h4>

      <div className="content">
        <UploadImages />
      </div>
    </div>
  );
}
}

export default App;