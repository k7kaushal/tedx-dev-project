import React from "react";
import "./PastEditions.css";
import "./components/PastEvents.css";
import PastEvents from "./components/PastEvents";
import OurSpeakers1 from "./components/OurSpeakers1";
import OurSpeakers2 from "./components/OurSpeakers2";
import OurSpeakers3 from "./components/OurSpeakers3";
import OurSpeakers4 from "./components/OurSpeakers4";
import OurSpeakers5 from "./components/OurSpeakers5";
import OurSpeakers6 from "./components/OurSpeakers6";
import OurSpeakers7 from "./components/OurSpeakers7";
import Sponsor from "./components/Sponsor";
import TabNav from "./components/TabNav";
import Tab from "./components/Tab";
import Rectangle11 from "./components/Rectangle11.png";
import Saf from "./components/Saf.jpg";
import Mar from "./components/Mar.jpg";
import Ik from "./components/Ik.jpg";
import NK from "./components/nkblue.png";
import Card from "./PastCards";
import Tcolor from "./components/Tcolor3.jpg";
import ME from "./components/ME.jpg";
import { CardGroup } from "react-bootstrap";
import JK from "./components/jharokhaMain.png"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Jharokha",
    };
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  };
  render() {
    const settings = {
      dots: true, // Show dot indicators
      infinite: true, // Infinite looping
      speed: 500, // Animation speed
      slidesToShow: 3, // Number of slides to show
      slidesToScroll: 3, // Number of slides to scroll
    };

    return (
      <div className="mt-5 tab-container">
        <TabNav
          className="nav-1"
          tabs={[
            "Jharokha",
            "Nakshatra",
            "Marcato",
            "Safarnama",
            "Ikigai",
            "Life in Technicolor",
            "The Mirror of Erised",
          ]}
          selected={this.state.selected}
          setSelected={this.setSelected}
        >
          <Tab isSelected={this.state.selected === "Jharokha"}>
            <div className="top-image" style={{}}>
              <img
                className="top-image-1"
                style={{ height: "35rem" }}
                src={JK}
              />
              <CardGroup className="pastclass">
                <Card
                  className="sort"
                  pastimg={JK}
                  pastcontent="“Jharokha” is a Hindi word for a window. Imagine standing by a Jharokha, a window to the world that unveils not just the bustling streets but a multitude of lives, each a chapter in its own storybook. Every passerby is a character etching their unique tale onto the canvas of existence. It's akin to browsing through countless lives, each one whispering a different narrative, waiting to be embraced and understood. As you peer through this captivating window, it whispers to you, 'Your reality isn't stagnant; gather the world’s light and weave your own mosaic, your own story.'"
                />
              </CardGroup>
            </div>
            <div className="tab-content-bottom">
              At TEDxPICT, this year’s theme resonates with the essence of
              diverse ideas and stories, each unique like the patterns created
              by a Jharokha. It prompts us to introspect and gaze beyond the
              familiar. So join us at TEDxPICT : Jharokha, as we peer through a
              window of endless possibilities or as we like to say “A Jharokha
              of endless possibilities!”
            </div>
            <OurSpeakers7 />
          </Tab>
          <Tab isSelected={this.state.selected === "Nakshatra"}>
            <div className="top-image" style={{}}>
              <img
                className="top-image-1"
                style={{ height: "35rem" }}
                src={NK}
              />
              <CardGroup className="pastclass">
                <Card
                  className="sort"
                  pastimg={NK}
                  pastcontent="Nakshatras and our lives are not as contrasting as we assume them to be.
Just as the stars in a constellation are separate entities that come together to form a recognizable pattern, individuals in society come together to form a community. Each person has their own unique experiences, but when combined, they create a larger whole. Just as the stars in a constellation are linked by invisible lines, people are connected through shared experiences and relationships.

At TEDxPICT, “Nakshatra” explores the similarities between our lives and nakshatras."
                />
              </CardGroup>
            </div>
            <div className="tab-content-bottom">
              Nakshatras and our lives are not as contrasting as we assume them
              to be. Just as the stars in a constellation are separate entities
              that come together to form a recognizable pattern, individuals in
              society come together to form a community. Each person has their
              own unique experiences, but when combined, they create a larger
              whole. Just as the stars in a constellation are linked by
              invisible lines, people are connected through shared experiences
              and relationships. At TEDxPICT, “Nakshatra” explores the
              similarities between our lives and nakshatras.
            </div>
            <OurSpeakers6 />
          </Tab>
          <Tab isSelected={this.state.selected === "Marcato"}>
            <div className="top-image" style={{}}>
              <img
                className="top-image-1"
                style={{ height: "40rem" }}
                src={Mar}
              />
              <CardGroup className="pastclass">
                <Card
                  className="sort"
                  pastimg={Mar}
                  pastcontent="Marcato is the symphony, the highlight of our lives. Marcato is the troupe of unforgettable moments, it’s the stars aligning in a moment of perfect clarity of our own journey. The defining notes of Marcato relate to the frenzy of life. Marcato is an ode to the significant happenings in all our lives, the uniqueness of all events in it. Marcato is the difference between being a mundane melody of monotony and an experimental extreme extravaganza. 
At TEDxPICT, we feel MARCATO encompasses the fragments of our ordinarily extraordinary lives. Marcato is about the uniqueness in all of us. About things that make us different, and make us stand out.  How our differences don’t invalidate us and should be cherished and celebrated.
"
                />
              </CardGroup>
            </div>
            <div className="tab-content-bottom">
              Marcato is the symphony, the highlight of our lives. Marcato is
              the troupe of unforgettable moments, it’s the stars aligning in a
              moment of perfect clarity of our own journey. The defining notes
              of Marcato relate to the frenzy of life. Marcato is an ode to the
              significant happenings in all our lives, the uniqueness of all
              events in it. Marcato is the difference between being a mundane
              melody of monotony and an experimental extreme extravaganza. At
              TEDxPICT, we feel MARCATO encompasses the fragments of our
              ordinarily extraordinary lives. Marcato is about the uniqueness in
              all of us. About things that make us different, and make us stand
              out. How our differences don’t invalidate us and should be
              cherished and celebrated.
            </div>
            <OurSpeakers5 />
          </Tab>
          <Tab isSelected={this.state.selected === "Safarnama"}>
            <div className="top-image" style={{}}>
              <img
                className="top-image-1"
                style={{ height: "40rem" }}
                src={Saf}
              />
              <CardGroup className="pastclass">
                <Card
                  pastimg={Saf}
                  pastcontent="Safarnama is a journey of creation, imagination, and most of all, one’s self. It is like Dastan-e-Zindagi, a journey within. It’s astonishing how each person has a different journey, a different story to tell, the journey which has shaped them, made them, and this is the beauty of the journey. Safarnama is an exalted ode to the journeys that we undergo as humans, an ode to the resilient human spirit of navigating the sea of difficulties, the journey to take over the challenge and shatter glass ceilings to achieve a higher goal, a better purpose-filled life. At TEDxPICT, we feel Safarnama is a theme that reflects these pandemic times. Despite the isolation we faced, our journeys and lives overlapped with all the tragedy and glimpses of joy that the pandemic gave us. Safarnama is a celebration of the indomitable human spirit and of the intertwining journeys we take."
                />
              </CardGroup>
            </div>
            <div className="tab-content-bottom">
              Safarnama is a journey of creation, imagination, and most of all,
              one’s self. It is like Dastan-e-Zindagi, a journey within. It’s
              astonishing how each person has a different journey, a different
              story to tell, the journey which has shaped them, made them, and
              this is the beauty of the journey. Safarnama is an exalted ode to
              the journeys that we undergo as humans, an ode to the resilient
              human spirit of navigating the sea of difficulties, the journey to
              take over the challenge and shatter glass ceilings to achieve a
              higher goal, a better purpose-filled life. At TEDxPICT, we feel
              Safarnama is a theme that reflects these pandemic times. Despite
              the isolation we faced, our journeys and lives overlapped with all
              the tragedy and glimpses of joy that the pandemic gave us.
              Safarnama is a celebration of the indomitable human spirit and of
              the intertwining journeys we take.
            </div>
            <OurSpeakers2 />
          </Tab>
          <Tab isSelected={this.state.selected === "Ikigai"}>
            <div className="top-image" style={{}}>
              <img
                className="top-image-1"
                style={{ height: "40rem" }}
                src={Ik}
              />
              <CardGroup className="pastclass">
                <Card
                  pastimg={Ik}
                  pastcontent="Ikigai  is a Japanese concept that combines the terms iki, meaning “alive” or “life,” and gai, meaning “benefit” or “worth.” The combination of these terms gives us ‘reason for being’. It is the union point of four fundamental components of life: passion, vocation, profession, and mission. IKIGAI was a culmination of speakers from various walks of life who went through hardships and struggled along their journey. The commonality of being zealous about their passion is what keeps them content in life. "
                  quote="“Our ikigai is different for all of us, but one thing we have in common is that we are all searching for meaning.”"
                  authname="-Hector Garcia Puigcerver"
                />
              </CardGroup>
            </div>
            <div className="tab-content-bottom">
              Ikigai is a Japanese concept that combines the terms iki, meaning
              “alive” or “life,” and gai, meaning “benefit” or “worth.” The
              combination of these terms gives us ‘reason for being’. It is the
              union point of four fundamental components of life: passion,
              vocation, profession, and mission. IKIGAI was a culmination of
              speakers from various walks of life who went through hardships and
              struggled along their journey. The commonality of being zealous
              about their passion is what keeps them content in life.
              <br></br>
              <br></br>
              <h3>
                “Our ikigai is different for all of us, but one thing we have in
                common is that we are all searching for meaning.”
              </h3>
              <br></br>{" "}
              <h3 style={{ textAlign: "right", marginRight: "15%" }}>
                -Hector Garcia Puigcerver.
              </h3>
            </div>
            <OurSpeakers3 />
          </Tab>
          <Tab isSelected={this.state.selected === "Life in Technicolor"}>
            <div className="top-image" style={{}}>
              <img
                className="top-image-1"
                style={{ height: "40rem" }}
                src={Tcolor}
              />
              <CardGroup className="pastclass">
                <Card
                  pastimg={Tcolor}
                  pastcontent=" It is a breath-taking moment when we realize that the world is made up of colors - perspectives that you had never seen before, ideas that never would have appeared in your wildest dreams and people, these amazing people, that hold on to these brilliant ideas with a simply astounding conviction. This is when the journey of your life begins, in ‘Technicolor’. ‘Life in Technicolor’ was all about introducing new colors to our palettes by giving a platform to these fascinating people and their magical, colorful ideas."
                  quote="“The rest of the world was black and white but we were in screaming colors.”"
                />
              </CardGroup>
            </div>
            <div className="tab-content-bottom">
              It is a breath-taking moment when we realize that the world is
              made up of colors - perspectives that you had never seen before,
              ideas that never would have appeared in your wildest dreams and
              people, these amazing people, that hold on to these brilliant
              ideas with a simply astounding conviction. This is when the
              journey of your life begins, in ‘Technicolor’. ‘Life in
              Technicolor’ was all about introducing new colors to our palettes
              by giving a platform to these fascinating people and their
              magical, colorful ideas.<br></br>
              <br></br>
              <h3>
                “The rest of the world was black and white but we were in
                screaming colors.”
              </h3>
            </div>
            <OurSpeakers4 />
          </Tab>
          <Tab isSelected={this.state.selected === "The Mirror of Erised"}>
            <div className="top-image" style={{}}>
              <img
                className="top-image-1"
                style={{ height: "40rem" }}
                src={ME}
              />
              <CardGroup className="pastclass">
                <Card
                  pastimg={ME}
                  pastcontent="The Mirror of Erised, one of the artifacts in the Harry Potter universe a.k.a The Wizarding World, doesn’t show the outer reflection of a person but their innermost desire. The image a person creates for themselves in society isn’t dominated only by physical appearance but also their intentions and desires. Sticking with the namesake, our event completely revolves around the desires and changes the speakers want to bring and see around them. It is crucial to look within yourself and search your innermost desires and try out different methods to achieve them. The union of passion and good intentions will provide us nothing but progress and our event speakers are testament to that fact."
                  quote="“Desire is the starting point of all achievement.  Not a hope, not a wish, but a keen pulsating desire which transcends everything.”"
                  authname="-Napoleon Hill"
                />
              </CardGroup>
            </div>
            <div className="tab-content-bottom">
              The Mirror of Erised, one of the artifacts in the Harry Potter
              universe a.k.a The Wizarding World, doesn’t show the outer
              reflection of a person but their innermost desire. The image a
              person creates for themselves in society isn’t dominated only by
              physical appearance but also their intentions and desires.
              Sticking with the namesake, our event completely revolves around
              the desires and changes the speakers want to bring and see around
              them. It is crucial to look within yourself and search your
              innermost desires and try out different methods to achieve them.
              The union of passion and good intentions will provide us nothing
              but progress and our event speakers are testament to that fact.
              <br></br>
              <br></br>
              <h3>
                "Desire is the starting point of all achievement. Not a hope,
                not a wish, but a keen pulsating desire which transcends
                everything."
              </h3>
              <br></br>{" "}
              <h3 style={{ textAlign: "right", marginRight: "15%" }}>
                -Napoleon Hill
              </h3>
            </div>
            <OurSpeakers1 />
          </Tab>
        </TabNav>
      </div>
    );
  }
}
export default App;

/*
import React from "react";
import Slider from "react-slick"; // Import the Slider component
import Tab from "./components/Tab";

import React from "react";
import Slider from "react-slick"; // Import the Slider component
import Tab from "./components/Tab";
// Other imports remain unchanged

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Nakshatra",
    };
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  };

  render() {
    const settings = {
      dots: true, // Show dot indicators
      infinite: true, // Infinite looping
      speed: 500, // Animation speed
      slidesToShow: 3, // Number of slides to show
      slidesToScroll: 3 // Number of slides to scroll
    };

    return (
      <div className="mt-5 tab-container">
        <Slider {...settings}>
          <Tab isSelected={this.state.selected === "Nakshatra"}>
            // {/* Nakshatra content }*/
//             </Tab>
//             <Tab isSelected={this.state.selected === "Marcato"}>
//               {/* Marcato content */}
//             </Tab>
//             {/* Add more tabs as needed */}
//             <Tab isSelected={this.state.selected === "Jharokha"}>
//               {/* Jharokha content */}
//             </Tab>
//           </Slider>
//         </div>
//       );
//     }
//   }

//   export default App;

// */
