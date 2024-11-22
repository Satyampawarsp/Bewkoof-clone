import React from 'react'
import Header from '../../components/bewkoof_Header/Header'
import NewArrival from '../../components/newArrival/NewArrival'
import BewkoofTopHit from '../../components/top-hits/BewkoofTopHit'
import CarouselOne from '../../components/carousalOne/CarouselOne'
import ClassicHit from '../../components/classic_Hit/ClassicHit'
import Worthit from '../../components/worth_Offer_Ani/Worthit'
import Mans from '../../components/category/Mans'
import Womens from '../../components/category/Womens'
import OctobarFav from '../../components/octobar_Fav/OctobarFav'

const Home = () => (
  <div>
    <Header />
    <CarouselOne/>
    <ClassicHit/>
    <NewArrival />
    <OctobarFav/>
    <Worthit/>
    <BewkoofTopHit />
    <Mans/>
    <Womens/>

  </div>
)

export default Home
