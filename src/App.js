import "./styles.css";
import UserForm from "./UserForm";
import Title from "./Title";
import List from "./List";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("Liste des joueurs");
  const [userName, setUserName] = useState(["Pas de joueurs"]);

  function handleUpdateList(user) {
    setUserName(user);
  }

  return (
    <div className="App">
      <Title title={title} />
      <List userName={userName} />
      <UserForm username={userName} newUserName={handleUpdateList} />
    </div>
  );
}
