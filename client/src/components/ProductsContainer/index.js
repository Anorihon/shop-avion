import React, { useEffect, useState } from 'react'
import styles from './ProductsContainer.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../Redux/reducers/productsReducers'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { HOST } from '../Token'
import axios from 'axios'

export default function ProductsContainer({ id }) {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.store.products.data)
  const [productsContainerArray, setProductsContainerArray] = useState([])

  function getProducts() {
    dispatch(fetchProducts())
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (id) {
    useEffect(() => {
      findCeramicsObjects(list, id)
    }, [list, id])

    function findCeramicsObjects(data, idToExclude) {
      const selectedObjects = data.find((item) => item.id === idToExclude)
      const ceramicsObjects = data.filter(
        (item) =>
          item.categories === selectedObjects.categories &&
          item.id !== idToExclude,
      )
      if (ceramicsObjects.length <= 4) {
        return ceramicsObjects
      }
      const randomIndexes = []
      while (randomIndexes.length < 4) {
        const randomIndex = Math.floor(Math.random() * ceramicsObjects.length)
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex)
        }
      }
      setProductsContainerArray([
        ...randomIndexes.map((index) => ceramicsObjects[index]),
      ])
    }
  } else {
    useEffect(() => {
      async function getRandomBackProduct() {
        const response = await axios.get(HOST + `/products/random`)
        const data = response.data

        const finallArray = []
        for (let i = 0; i < 4; i++) {
          finallArray.push(data[i])
        }
        return setProductsContainerArray(finallArray)
      }
      getRandomBackProduct()
    }, [])
  }

  /* ВОТ ЭТО ДОБАВИЛ */
  useEffect(() => {
    async function getRandomBackProduct() {
      const response = await axios.get(HOST + `/products/random`)
      const data = response.data

      const finallArray = []
      for (let i = 0; i < 4; i++) {
        finallArray.push(data[i])
      }
      return setProductsContainerArray(finallArray)
    }
    getRandomBackProduct()
  }, [])
  /* ВОТ ЭТО ДОБАВИЛ */

  return (
    <>
      <div className={styles['products-container-container']}>
        {id && (
          <h2 className={styles['products-container-tittle']}>
            You might also like
          </h2>
        )}
        <div className={styles['products-container']}>
          {productsContainerArray.map((product, index) => (
            <NavLink
              to={`/products/${product.id}`}
              key={product.id}
              className={styles['products-container-item']}
            >
              <img
                src={product.imageUrls}
                className={styles['products-container-item-img']}
              />

              <p className={styles['products-container-item-name']}>
                {product.name}
              </p>
              <p className={styles['products-container-item-price']}>
                ${product.currentPrice}
              </p>
            </NavLink>
          ))}
        </div>
        <NavLink to="/All-products/">
          <button className={styles['products-container-btn']}>
            View collection
          </button>
        </NavLink>
      </div>
    </>
  )
}

ProductsContainer.propTypes = {
  category: PropTypes.string,
  id: PropTypes.string,
}
