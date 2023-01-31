import React from 'react'
import styles from './style'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Nav bar???
        </div>
      </div>





      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          everything that will be visible on the page
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats 
          poopsock
          morepoop
          
        </div>
      </div>





    </div>
  )
}


export default App