import React, { useState } from "react";
import { LoadImage, SearchImage } from "./components/api";
import Images from "./components/images";

function App() {
  const [query, setQuery] = useState();
  const [searchq, setSearch] = useState();
  // console.log(query);

  const data = LoadImage();

  const search = () => {
    setSearch(query);
  };

  const searchData = SearchImage(searchq);
  console.log(searchData);
  return (
    <>
      <div>
        <input type="text" onChange={(event) => setQuery(event.target.value)} />
        <button onClick={search}>Search</button>
      </div>
      <div className="App">
        {searchq
          ? searchData.map((img, key) => (<Images key={key} src={img.urls.thumb} />))

          : data.map((img, key) => <Images key={key} src={img.urls.thumb} />)
          }

      </div>
    </>
  );
}

export default App;
