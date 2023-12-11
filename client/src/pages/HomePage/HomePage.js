import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import ItStarted from '../../components/ItStarted'
import Advantages from '../../components/AdvantagesSection'
import MainImage from "../../components/MainImage";

export default function HomePage() {
  return (
    <>
      <MainImage />
      <Advantages />
      <ProductsContainer />
      <ItStarted />
    </>
  )
}
