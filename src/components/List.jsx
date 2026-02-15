import React from "react";
import "../stylesheets/list.css";

const List = ({ headList }) => {
  return (
    <div>
      <div className="container">
        <div className="rightbox">
          <div className="rb-container">
            <ul className="rb">
              {headList.map((element) => {
                return (
                  <li className="rb-item">
                    <div className="timestamp">
                      {element.head}
                      <br />
                      {element.items.map((subElement) => {return(
                        <div className="item-title">{subElement.item}</div>);
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
