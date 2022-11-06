import './Navbar.css'

const Navbar = () => {

    return (
        <div className='navbar'>
            {/* <ul className='navbar_list'>
                <li>Compétences</li>
                <li>Skills</li>
                <li>Expériences professionnelles</li>
                <li>Formations</li>
                <li>Langues</li>
                <li>Qualités</li>
            </ul> */}
            <a href='#Compétences'>Compétences</a>
            <a href='#Skills'>Skills</a>
            <a href='#Expériences professionnelles'>Expériences professionnelles</a>
            <a href='#Formations'>Formations</a>
            <a href='#Langues'>Langues</a>
            <a href='#Qualités'>Qualités</a>
        </div>

        // <div>
        //     <div id="mySidenav" class="sidenav">
        //         <a id="closeBtn" href="#" class="close">×</a>
        //         <ul>
        //             <li><a href='#Compétences'>Compétences</a></li>
        //             <li><a href='#Skills'>Skills</a></li>
        //             <li><a href='#Expériences professionnelles'>Expériences professionnelles</a></li>
        //             <li><a href='#Formations'>Formations</a></li>
        //             <li><a href='#Langues'>Langues</a></li>
        //             <li><a href='#Qualités'>Qualités</a></li> 
        //         </ul>
        //     </div>

        //     <a href="#" id="openBtn">
        //         <span class="burger-icon">
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //         </span>
        //     </a>
        // </div>
    )
}

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
// }

export default Navbar