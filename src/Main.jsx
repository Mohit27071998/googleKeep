import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CreateNote from "./Components/CreateNote/CreateNote";

const Main = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <CreateNote search={search} />
      <Footer />
    </div>
  );
};

export default Main;
