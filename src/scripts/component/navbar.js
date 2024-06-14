class navbarELement extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        
         <header style="background: url('../public/images/background-mini.svg');"
                class="flex flex-col md:flex-row items-center justify-around w-full h-28 p-4">

            <div class="w-full md:w-auto flex justify-between items-center">
                <img src="../public/images/logo.svg" alt="Logo" class="w-40 md:w-64 bg-cover bg-center bg-fixed">
                <button id="menu-btn" class="block md:hidden text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            <nav id="menu" class="hidden md:block">
                <ul class="flex flex-col md:flex-row md:space-x-10 text-xl space-y-4 md:space-y-0 mt-4 md:mt-0">
                    <li><a href="#" class="nav-link text-white">Home</a></li>
                    <li><a href="#" class="nav-link text-white">Features</a></li>
                    <li><a href="#" class="nav-link text-white">About Us</a></li>
                    <li><a href="#" class="nav-link text-white">Contact</a></li>
                </ul>
            </nav>
          </header>
        
        `
    }
}
customElements.define('navbar-element', navbarELement);