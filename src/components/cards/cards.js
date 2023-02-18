import React from 'react'
import Image from 'next/image'
import styles from '../cards/card.module.css'

export default function cards({firstRowData,secondRowData }) {
  return (
    <div class="mt-5 pt-3 mb-5">
    <div class="row justify-content-center mb-4">
      {firstRowData.map((item) => {
        return (
          <div class="col-lg-4 col-md-8 col-sm-12">
            <div className={styles.whybytescareCard}>
              <Image src={item.image} alt="card" width={80} height={80} />
              <h3 class="mt-4">{item.heading}</h3>
              <p class="mt-4">{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
    <div class="row justify-content-center mb-4">
      {secondRowData.map((item) => {
        return (
          <div class="col-ld-4 col-md-4 col-sm-8">
            <div className={styles.whybytescareCard}>
              <Image src={item.image} alt="card" width={80} height={80} />
              <h3 class="mt-4">{item.heading}</h3>
              <p class="mt-4">{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  </div>
  )
}
