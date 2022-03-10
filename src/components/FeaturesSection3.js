import React from "react";
import Section from "./Section";
import FeaturesColumn from "./FeaturesColumn";
import "./FeaturesSection3.scss";

function FeaturesSection3(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <div className="columns is-vcentered is-variable is-4 is-desktop">
          <div className="column is-12 is-2-desktop">
            <FeaturesColumn
              textAlign="right"
              items={[
                {
                  title: "Chat",
                  description: "Imagine a world where you can chat.",
                  iconClass: "fas fa-comments",
                  iconColor: "primary",
                },
                {
                  title: "Play",
                  description: "Imagine a world where you can play.",
                  iconClass: "fas fa-gamepad",
                  iconColor: "danger",
                },
                {
                  title: "Cats",
                  description: "Imagine a world where you can cats.",
                  iconClass: "fas fa-cat",
                  iconColor: "info",
                },
              ]}
            />
          </div>
          <div className="column">
            <figure className="FeaturesSection3__image image">
              <img src={props.image} alt="Illustration" />
            </figure>
          </div>
          <div className="column is-12 is-2-desktop">
            <FeaturesColumn
              textAlign="left"
              items={[
                {
                  title: "Lemon",
                  description: "Imagine a world where you can lemon.",
                  iconClass: "fas fa-lemon",
                  iconColor: "warning",
                },
                {
                  title: "Birthday",
                  description: "Imagine a world where it's your birthday.",
                  iconClass: "fas fa-birthday-cake",
                  iconColor: "primary",
                },
                {
                  title: "Giving",
                  description: "Imagine a world where you give stuff away.",
                  iconClass: "fas fa-hand-holding-heart",
                  iconColor: "danger",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection3;
