import React from "react";
import StarFilled from "../../../assets/star.svg";
import Star from "../../../assets/star-outline.svg";
import Trash from "../../../assets/trash-outline.svg";

const ListItem = ({ name, fav, id, handleFavBtnPress, handleDelete }) => {
  const renderfavBtn = () => {
    if (fav) {
      return <img className="icon" src={StarFilled} alt="favourite" />;
    }
    return <img className="icon" src={Star} alt="favourite" />;
  };

  return (
    <li className="listItem">
      <div>
        <p className="name">{name}</p>
        <p>is your friend</p>
      </div>
      <div>
        <button onClick={() => handleFavBtnPress(id)} className="btn">
          {renderfavBtn()}
        </button>
        <button onClick={() => handleDelete(id)} className="btn">
          <img className="icon" src={Trash} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
