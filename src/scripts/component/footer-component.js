class FooterRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                      
    <section class="footer">
      <img src="/images/logo.svg" width="300px" alt="logo" />
      <div class="footer-content">
        <div class="footer-row">
          <h3>Resource</h3>
          <ul>
            <li><a href="#">Aplication</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">System</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-row">
          <h3>Resource</h3>
          <ul>
            <li><a href="#">Aplication</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">System</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-row">
          <h3>Resource</h3>
          <ul>
            <li><a href="#">Aplication</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">System</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
    </section>
      `;
  }
}

customElements.define("footer-component", FooterRestaurant);
