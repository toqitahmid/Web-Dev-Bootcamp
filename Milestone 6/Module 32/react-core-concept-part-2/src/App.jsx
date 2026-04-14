import "./App.css";
import Counter from "./counter";
import Customer from "./customar";
import Posts from "./Posts";
import { Suspense } from "react";


const CustomUrl = fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(res => res.json())

const PostUrl = async() => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  return res.json();
}

function ClickFinder() {
  window.alert("I'm clicked");
}

function AddMe(a) {
  window.alert(`${a + 5}`);
}
const callPost = PostUrl();
function App() {

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
          <p>React Core Concept Part-2</p>
        </div>
        <button onClick={ClickFinder}>Click Me</button>
        <button
          onClick={function () {
            window.alert(`I'm second clicked`);
          }}
        >
          Click Me 2
        </button>
        {/* <button onClick={AddMe(5)}>Add Me</button> */}
        <button onClick={() => AddMe(5)}>Add Me</button>

        <div className="useState">
          <Counter className="useState"></Counter>
        </div>
        <div>
          <Suspense fallback = {<h3>loading...</h3>}>
            <Customer CustomUrl={CustomUrl }>

            </Customer>
          </Suspense>
        </div>
        <div>
          <Suspense fallback = {<h2>Loading...</h2>}>
            <Posts callPost = {callPost}>

            </Posts>
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default App;
