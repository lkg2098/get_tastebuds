import biteBackground from "./assets/images/bitesBackground.png";
import "./App.css";
import { Helmet } from "react-helmet";
import ImageBackground from "./components/ImageBackground";

function App() {
  return (
    <div className="App">
      <Helmet>
        <script>
          {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1087560');`}
        </script>
      </Helmet>
      <header className="App-header">
        {/* <ImageBackground
          src={biteBackground}
          alt="Large bite marks in red-orange shapes with crumbs"
        /> */}
        <h1 className="title">
          Welcome to <span className="decorative">Tastebuds</span>
        </h1>
        <h4 className="subtitle">
          A better way to decide where to eat with friends.
        </h4>
        <div class="ml-embedded" data-form="4xSB54"></div>
      </header>
    </div>
  );
}

export default App;
