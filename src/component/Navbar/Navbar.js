import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {


//     const [burger_class, setBurgerClass] = useState("burger_bar unclicked")
//     const [menu_class, setMenuClass] = useState("menu hidden")
//     const [isMenuClicked, setIsMenuClicked] = useState(false)

//     const updateMenu = () => {
//         if (!isMenuClicked) {
//             setBurgerClass("burger_bar clicked")
//             setMenuClass("menu visible")
//         }
//         else {
//             setBurgerClass("burger_bar unclicked")
//             setMenuClass("menu hidden")
//         }
//         setIsMenuClicked(!isMenuClicked)
//     }

//     return (

//         <div style={{ width: '100%', height: '100vh' }}>
//             <nav>
//                 <div className="burger_menu" onClick={updateMenu}>
//                     <div className={burger_class} ></div>
//                     <div className={burger_class} ></div>
//                     <div className={burger_class} ></div>
//                 </div>
//             </nav>

//             <div className={menu_class}>
//                 <ul>
//                     <a href='#Compétences'>Compétences</a>
//                     <a href='#Skills'>Skills</a>
//                     <a href='#Expériences professionnelles'>Expériences professionnelles</a>
//                     <a href='#Formations'>Formations</a>
//                     <a href='#Langues'>Langues</a>
//                     <a href='#Qualités'>Qualités</a>
//                 </ul>
//             </div>
//         </div>
//     );
return (
    <div className='navbar'>
        <a href='#Compétences'>Compétences</a>
        <a href='#Skills'>Skills</a>
        <a href='#Expériences professionnelles'>Expériences professionnelles</a>
        <a href='#Formations'>Formations</a>
        <a href='#Langues'>Langues</a>
        <a href='#Qualités'>Qualités</a>
    </div>
)
}

//         <div>
//             <div id="mySidenav" class="sidenav">
//                 <a id="closeBtn" href="#" class="close">×</a>
//                 <ul>
//                     <li><a href='#Compétences'>Compétences</a></li>
//                     <li><a href='#Skills'>Skills</a></li>
//                     <li><a href='#Expériences professionnelles'>Expériences professionnelles</a></li>
//                     <li><a href='#Formations'>Formations</a></li>
//                     <li><a href='#Langues'>Langues</a></li>
//                     <li><a href='#Qualités'>Qualités</a></li> 
//                 </ul>
//             </div>

//             <a href="#" id="openBtn">
//                 <span class="burger-icon">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </span>
//             </a>
//         </div>
//     )
// }

// var sidenav = document.getElementById("mySidenav");
// var openBtn = document.getElementById("openBtn");
// var closeBtn = document.getElementById("closeBtn");

// openBtn.onclick = openNav;
// closeBtn.onclick = closeNav;

// /* Set the width of the side navigation to 250px */
// function openNav() {
//   sidenav.classList.add("active");
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
//   sidenav.classList.remove("active");
//  }

export default Navbar