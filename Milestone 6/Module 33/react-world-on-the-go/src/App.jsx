import { Suspense } from "react";
import "./App.css";
import Countires from "./components/Countries/countires";
const fetchingUrl = async() => {
  
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
}

const fetchCall = fetchingUrl();
function App() {
  return (
    <>
      <section className="content">
        <div>
            <h1>React World On The Go...</h1>
        </div>
      </section>
        <div className="content">
          <Suspense fallback = {<h1>Loading...</h1>}>
             <Countires fetchCall = {fetchCall}></Countires>
          </Suspense>
        </div>
    </>
  );
}

export default App;
