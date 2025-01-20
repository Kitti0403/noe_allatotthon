document.getElementById("navbar").innerHTML =
` 
 <div class="header">
      <div class="nav">
          <div class="logo">
            <a href="index.html">
              <img alt="noe logo" src="images/noe_logo_no-bg.png">
            </a>
          </div>
          
          <a href="rolunk/rolunk.html"><button class="nav-butt"> 
              Rólunk
          </button></a>

          <a href="elerhetosegek/elerhetoseg.html"><button class="nav-butt">
              Elérhetőségeink
          </button></a>


          <a href="adomanyozas/adomany.html"><button class="nav-butt">
              Adományozás
          </button></a>

          <div class="navicons">
            <a href="kalkulator/kalkulator.html">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFF8E8" stroke-width="0.00024000000000000003">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 6.44772 8.44772 6 9 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H9C8.44772 8 8 7.55228 8 7ZM15 13C15.5523 13 16 13.4477 16 14V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V14C14 13.4477 14.4477 13 15 13ZM15 10C14.4477 10 14 10.4477 14 11C14 11.5523 14.4477 12 15 12H15.01C15.5623 12 16.01 11.5523 16.01 11C16.01 10.4477 15.5623 10 15.01 10H15ZM11 11C11 10.4477 11.4477 10 12 10H12.01C12.5623 10 13.01 10.4477 13.01 11C13.01 11.5523 12.5623 12 12.01 12H12C11.4477 12 11 11.5523 11 11ZM9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12H9.01C9.56228 12 10.01 11.5523 10.01 11C10.01 10.4477 9.56228 10 9.01 10H9ZM8 14C8 13.4477 8.44772 13 9 13H9.01C9.56228 13 10.01 13.4477 10.01 14C10.01 14.5523 9.56228 15 9.01 15H9C8.44772 15 8 14.5523 8 14ZM12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15H12.01C12.5623 15 13.01 14.5523 13.01 14C13.01 13.4477 12.5623 13 12.01 13H12ZM11 17C11 16.4477 11.4477 16 12 16H12.01C12.5623 16 13.01 16.4477 13.01 17C13.01 17.5523 12.5623 18 12.01 18H12C11.4477 18 11 17.5523 11 17ZM9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18H9.01C9.56228 18 10.01 17.5523 10.01 17C10.01 16.4477 9.56228 16 9.01 16H9ZM8.93417 2C8.95604 2 8.97799 2 9 2L15.0658 2C15.9523 1.99995 16.7161 1.99991 17.3278 2.08215C17.9833 2.17028 18.6117 2.36902 19.1213 2.87868C19.631 3.38835 19.8297 4.0167 19.9179 4.67221C20.0001 5.28387 20.0001 6.04769 20 6.93417V17.0658C20.0001 17.9523 20.0001 18.7161 19.9179 19.3278C19.8297 19.9833 19.631 20.6117 19.1213 21.1213C18.6117 21.631 17.9833 21.8297 17.3278 21.9179C16.7161 22.0001 15.9523 22.0001 15.0658 22H8.9342C8.0477 22.0001 7.28388 22.0001 6.67221 21.9179C6.0167 21.8297 5.38835 21.631 4.87868 21.1213C4.36902 20.6117 4.17028 19.9833 4.08215 19.3278C3.99991 18.7161 3.99995 17.9523 4 17.0658L4 7C4 6.97799 4 6.95604 4 6.93417C3.99995 6.04769 3.99991 5.28387 4.08215 4.67221C4.17028 4.0167 4.36902 3.38835 4.87868 2.87868C5.38835 2.36902 6.0167 2.17028 6.67221 2.08215C7.28387 1.99991 8.04769 1.99995 8.93417 2Z" fill="#FFF8E8"></path> </g>
                </svg>
            </a>

            <a href="index.html" class="animate-pulse">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.479 7.57827L15.093 3.12502C13.2787 1.62499 10.7213 1.62499 8.90703 3.12502L3.52097 7.57827C2.55059 8.38059 2 9.59705 2 10.8663V17.8109C2 20.066 3.73415 22 6 22H8C9.10457 22 10 21.1046 10 20V16.7478C10 15.4803 10.9521 14.5587 12 14.5587C13.0479 14.5587 14 15.4803 14 16.7478V20C14 21.1046 14.8954 22 16 22H18C20.2659 22 22 20.066 22 17.8109V10.8663C22 9.59706 21.4494 8.38059 20.479 7.57827Z" fill="#FFF8E8"></path> </g>
                </svg>
            </a>
          </div>

          
          <div class="dropdown" onclick="bugerMenu()">
                <div class="drop-container" onclick="myFunction(this)">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>

                    <div id="myDropdown" class="dropdown-content">
                        <a class="phonedrop" href="rolunk/rolunk.html">Rólunk</a>
                        <a class="phonedrop" href="elerhetosegek/elerhetoseg.html">Elérhetőségek</a>
                        <a class="phonedrop" href="adomanyozas/adomany.html">Adományozás</a>
                        <a class="phonedrop" href="kalkulator/kalkulator.html">Kalkulátor</a>
                        <a class="phonedrop" href="index.html">Főoldal</a>
                    </div>
                </div>
            </div>
      </div>
  </div>
`;

function bugerMenu() {
    document.getElementById("myDropdown").classList.toggle("slhow");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myFunction(x) {
    x.classList.toggle("change");
  }