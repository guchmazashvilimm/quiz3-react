import { useEffect, useState } from "react";
import axios from "axios";
import AppContainer from "./components/AppContainer";
import AppList from "./components/AppList";

const URL = "https://jsonplaceholder.typicode.com/photos?_limit=4";

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get(URL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <AppContainer>
      <AppList posts={posts} />
    </AppContainer>
  );
}

export default App;
