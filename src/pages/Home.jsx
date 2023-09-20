import React from 'react';
import '../styles/App.css';

const Home = () => (
  <div className="container">
    <h2 className="welcome">Welcome to Our page!</h2>
    <p className="home-p">
      Are you a Math Magician? Practice a variety of math skills: addition, subtraction,
      multiplication,
      and division using our free webpage. Math magicians allows students to get instant
      solutions to all
      kinds of math problems.
    </p>
    <p className="home-p">
      If you would like to create your own math expressions, here are some symbols that the
      calculator understands:
      <br />

      + (Addition)
      <br />
      - (Subtraction)
      <br />
      * (Multiplication)
      <br />
      / (Division)
    </p>
  </div>
);

export default Home;
