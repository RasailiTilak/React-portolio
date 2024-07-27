import React from 'react';
import profileImage from '../assets/profile.jpg'; // Make sure to add your profile image to the assets folder

const Home = () => {
  return (
    <div>
      <h2>Introduction</h2>
      <p>I am Computer Engineer. Currently working as IoT Software Engineer at Dongyang Techwin Co., Ltd.</p>
      <img src={profileImage} alt="Tilak Rasaili" />
      <h3>Interested In</h3>
      <p>I am interested in Machine Learning and IoT. Especially in TinyML.</p>
    </div>
  );
};

export default Home;
