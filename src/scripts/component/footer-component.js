class FooterRestaurant extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
                      
                      <footer class="footer-container">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">Dengan koleksi restoran yang beragam, setiap kunjungan ke Kamurocho Food Court adalah petualangan kuliner baru. Dari restoran mewah dengan pemandangan menakjubkan hingga warung kecil yang menyajikan makanan jalan yang lezat, kami menyediakan suasana yang ramah dan santai untuk semua tamu kami.
                              <br>

                            Selain menawarkan makanan berkualitas tinggi, Kamurocho Food Court juga merupakan destinasi yang sempurna untuk berkumpul bersama teman dan keluarga.<br> <br> Nikmati waktu bersama di ruang terbuka kami yang nyaman sambil menikmati hidangan lezat dari berbagai restoran kami.
                            
                            Jelajahi katalog kami untuk melihat apa yang ditawarkan oleh setiap restoran di Kamurocho Food Court. Dari menu khas hingga hidangan spesial, kami yakin Anda akan menemukan sesuatu yang memikat selera Anda.
                            
                            Ayo nikmati sensasi kuliner terbaik di Kamurocho Food Court - tempat di mana makanan lezat dan suasana yang menyenangkan bertemu untuk menciptakan pengalaman tak terlupakan bagi semua pengunjung.</p>
                          </div>
                
                          <div class="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul class="footer-links">
                              <li><a href="#">highly rate</a></li>
                              <li><a href="#">lower rate</a></li>
                             
                            </ul>
                          </div>
                
                          <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                              <li><a href="https://www.linkedin.com/in/luthfi-taufiqulhakim/">About Us</a></li>
                              <li><a href="#">Favorite</a></li>
                              <li><a href="#">Contact Us</a></li>
                              
                            </ul>
                          </div>
                        </div>
                        <hr>
                      </div>
                      <div class="container">
                        <div class="row">
                          <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2024 Dibuat dengan sepenuh hati by Luthfi Taufiqulhakim.
                            </p>
                          </div>
                
                          <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                            <li class= "linkedin"><a href="https://www.linkedin.com/in/luthfi-taufiqulhakim/"><img src="images/linkedin.png" alt="linkedin"></a></li>
                            <li class= "github"><a href="https://github.com/LuthfiTaufiqulhakim"><img src="images/github.png" alt="github"></a></li>
                              
                               
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                </footer>
    
      `;
    }
  }
  
  customElements.define("footer-component", FooterRestaurant);
  