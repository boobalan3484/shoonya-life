import React, { useEffect, useState } from 'react'

import AOS from 'aos'
import "aos/dist/aos.css"


import Header from './Components/Header'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Pagination from './Components/Pagination'
import Footer from './Components/Footer'
import Alert from './Components/Alert'
import Loading from './Components/Loading'
import { useAppContext } from './Context'

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
    })
  }, [])

  const { isLoading, noDataFound } = useAppContext();

  return (
    <div className='App'>

        <Header />
        <Hero />
        <Navbar
        />

        {isLoading && <Loading />}
        {noDataFound && <Alert />}

        {!isLoading && !noDataFound &&
          < Content
          />
        }
        <Pagination
        />
        <Footer />

    </div>
  );
};

export default App;