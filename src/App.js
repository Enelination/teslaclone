import React from 'react'
import './App.css'
import Header from './componenets/Header'

import Accessories from "./assets/Desktop-Accessories.jpg"
import ModelS from "./assets/Desktop-ModelS.jpeg"
import Model3 from "./assets/Desktop-Model3.jpeg"
import ModelX from "./assets/Desktop-ModelX.jpeg"
import ModelY from "./assets/Desktop-ModelY.jpeg"
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg"
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg"


import Item from './componenets/Item'



 function App() {
    return (
        <div className='App'> 
            <Header />
            <div className="app__itemsContainer">
            <Item 
            title='Lowest Cost Panels In America'
            desc='Money-back gurantee'
            descLink=''
            backgroundImg={SolarPanels}
            leftBtnTxt='ORDER NOW'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
            first

            
            />
            <Item 
            title='Model S'
            desc='$69,420'
            descLink=''
            backgroundImg={ModelS}
            leftBtnTxt='CUSTOMER ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'

            />
           <Item 
            title='Model 3'
            desc='$69,420'
            descLink=''
            backgroundImg={Model3}
            leftBtnTxt='CUSTOMER ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'

            />
           <Item 
            title='Model X'
            desc='$69,420'
            descLink=''
            backgroundImg={ModelX}
            leftBtnTxt='CUSTOMER ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'

            />        
            <Item       
            title='Model Y'
            desc='$69,420'
            descLink=''
            backgroundImg={ModelY}
            leftBtnTxt='CUSTOMER ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'

            />
            <Item 
            title='Solar Roof'
            desc='$69,420'
            descLink=''
            backgroundImg={SolarRoof}
            leftBtnTxt='CUSTOMER ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'

            />
            <Item 
            title='Accessories '
            desc='$69,420'
            descLink=''
            backgroundImg={Accessories}
            leftBtnTxt='CUSTOMER ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            

            />
            </div>
        </div>
    )
}

export default App;