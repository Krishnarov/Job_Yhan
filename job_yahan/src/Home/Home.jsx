import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Category from '../components/Category';
import Poster from '../components/Poster';
import FeaturedJobs from '../components/FeaturedJobs ';

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Companies />
      <Category />
      <Poster/>
      <FeaturedJobs />
    </div>
  )
}

export default Home;
