// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import IconPage from './IconPage'
import IconPageGlobal from './IconPageGlobal'
import './App.css';

function App() {
  return (
    <div className="App">
      <IconPage />
      <IconPageGlobal />
    </div>
  );
}

export default App;
library.add(fab, fas, far)
