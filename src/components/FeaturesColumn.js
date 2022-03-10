import React from "react";
import "./FeaturesColumn.scss";

function FeaturesColumn(props) {
  return (
    <div>
      {props.items.map((item, index) => (
        <div
          className={`FeaturesColumn__feature has-text-${props.textAlign}-desktop`}
          key={index}
        >
          <div
            className={`FeaturesColumn__icon icon has-text-${item.iconColor}`}
          >
            <i className={`${item.iconClass}`} />
          </div>
          <h3 className="FeaturesColumn__title title has-text-weight-bold is-spaced is-5">
            {item.title}
          </h3>
          <p className="subtitle is-6 has-text-grey">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturesColumn;
