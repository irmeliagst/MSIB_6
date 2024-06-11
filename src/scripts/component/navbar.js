class navbarElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav>
            <div class="navbar">
                <i class="bx bx-menu"></i>
                <div class="logo">
                <img src="/images/logo.svg" width="300px" alt="logo" />
                </div>
                <div class="nav-links">
                <div class="sidebar-logo">
                    <span class="logo-name">
                    <img src="/images/logo.svg" width="100px" alt="" /></span>
                    <i class="bx bx-x"></i>
                </div>
                <ul class="links">
                    <li><a href="#">Home</a></li>
                    <li>
                    <a href="#">Features</a>
                    </li>
                    <li>
                    <a href="#">About Us</a>
                    <i class="bx bxs-chevron-down js-arrow arrow"></i>
                    <ul class="js-sub-menu sub-menu">
                        <li><a href="#">Luthfi</a></li>
                        <li><a href="#">Farhan</a></li>
                        <li><a href="#">Ira</a></li>
                    </ul>
                    </li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                </div>
            </div>
        </nav>
        
        
        `
    }
}

customElements.define('navbar-element', navbarElement);