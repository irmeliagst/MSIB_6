class footerElement extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        
        <section class="footer text-white py-12" style="background: url('../public/images/background-mini.svg');">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <img src="../public/images/logo.svg" width="300px" alt="logo" class="mb-8 md:mb-0">

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="footer-row">
                <h3 class="text-lg font-semibold mb-4">Resources</h3>
                <ul>
                    <li><a href="#" class="text-gray-400 hover:text-white">Application</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Documentation</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">System</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">FAQ</a></li>
                </ul>
                </div>

                <div class="footer-row">
                <h3 class="text-lg font-semibold mb-4">Resources</h3>
                <ul>
                    <li><a href="#" class="text-gray-400 hover:text-white">Application</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Documentation</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">System</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">FAQ</a></li>
                </ul>
                </div>

                <div class="footer-row">
                <h3 class="text-lg font-semibold mb-4">Resources</h3>
                <ul>
                    <li><a href="#" class="text-gray-400 hover:text-white">Application</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Documentation</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">System</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">FAQ</a></li>
                </ul>
                </div>
            </div>
        </div>
    </section>
        
        `
    }
}
customElements.define('footer-element', footerElement);