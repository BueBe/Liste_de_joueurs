import React from "react";

function List(props) {
  const userName = props.userName;
  //console.log(userName);

  return (
    <div>
      <ul>
        {userName.map((value, key) => {
          console.log(key, value);
          return <li key={key}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
