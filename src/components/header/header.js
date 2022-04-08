import React from "react";
import './header.css';

const Header = ({black})=>{
   return( 
        <header  className={black && 'black'}>
            <div className="logo">
                <img src={`https://ik.imagekit.io/ynkdx78je4e/LogoNetflix_wmEjOHE8A.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649419063416`}/>
            </div>
            <div className="user">
                <img src={`https://ik.imagekit.io/ynkdx78je4e/i1-2021_dT8IoYAQW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649418408383`} alt="Foto do usuario"/>
            </div>
        </header>
   )
}

export default Header;