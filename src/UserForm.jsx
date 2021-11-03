import { React, useState } from "react";

let debug = false

function SetUser(user) {
  document.getElementById("user").value = user;
}

function UserForm(props) {
  const [userName, setUserName] = useState([]);
  const [userInput, setUserInput] = useState([]);
  let userTemp = [];
  if (debug) console.log("le type de la variable", userName, " est ", typeof userName);
  return (
    <div>
      <h1>Ajoutez un joueur</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (debug) console.log("userIput vaut : ", userInput);
          if (userInput.length > 0) {
            userTemp = userName.slice();
            userTemp.push(userInput);
            if (debug) console.log("userTemp vaut : ", userTemp);
            setUserName(userTemp);
            props.newUserName(userTemp);
            SetUser("");
            setUserInput([]);
          }
        }}
      >
        <label>
          Entrez un nom
          <input
            id="user"
            type="text"
            name="name"
            onInput={(e) => {
              if (debug) console.log("userInput vaut : ", userInput);
              e.preventDefault();
              setUserInput(e.currentTarget.value);
            }}
          />
        </label>
        <input type="submit" value="Envoyer" />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.newUserName(["Pas de joueurs"]);
            setUserInput([]);
            setUserName([]);
            SetUser("");
          }}
        >
          Effacer
        </button>
      </form>
    </div>
  );
}

export default UserForm;
