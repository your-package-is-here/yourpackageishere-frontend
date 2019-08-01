import React, {Component, Fragment} from 'react';
import Who from './who';

export default class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      john: {
        name: 'John',
        description: 'Hi, I am John! I am a full-time dog dad that does software development on the side. I enjoy working out, playing video games, dog walks, and good mystery thriller movies ( Lucky Number Slevin && Kiss Kiss Bang Bang).',
        image: require( "./images/John.jpg" ),
      },
      kush: {
        name: 'Kush',
        description: 'I am Software Developer Apprenti for Amazon. I have bachelor’s degree in Mechanical Engineering from University of North Texas in Denton, Texas. I recently transition from military. I am excited to for this role and looking forward for this opportunity.',
        image: require( "./images/Kush.png" ),
      },
      chai: {
        name: 'Chai',
        description: 'I have a background in Aerospace,E-commerce and Casino management. I am looking to apply My new  development skills to use an innovative,user-centric approach to solve problems for others. I believes that problem solving should be organic, data-driven, and iterative. In my spare time, you\'ll find me Watching Cosmos, Cooking, spending time with my dog',
        image: require( "./images/Chai.png" ),
      },
      levi: {
        name: 'Levi',
        description: 'Before becoming a software developer, I served in the Coast Guard and worked in the marketing industry. I am a graduate of the Honolulu-based learning bootcamp, DevLeague, where I studied fullstack JavaScript development.',
        image: require( "./images/Levi.jpeg" ),
      },
    };
  }

  render() {
    return (
      <Fragment>
        <div className="about-us" id="about-us">
          <h2>About Us</h2>
          <div className="about-us_who">
            <Who 
            name = {this.state.john.name}
            description = {this.state.john.description}
            image = {this.state.john.image}
            />
            <Who 
            name = {this.state.kush.name}
            description = {this.state.kush.description}
            image = {this.state.kush.image}
            />
            <Who 
            name = {this.state.chai.name}
            description = {this.state.chai.description}
            image = {this.state.chai.image}
            />
            <Who 
            name = {this.state.levi.name}
            description = {this.state.levi.description}
            image = {this.state.levi.image}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
