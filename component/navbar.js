function navbar(page) {
  if (page === "whatsapp") {
    return `<div id="main_logo">
    <img src="https://transcendent-alpaca-eab5f9.netlify.app/img/Screenshot%202022-07-19%20152729.png" alt="">
</div>
<div id="nav_menu">
    <div id="product">
        <div>
            <a href="">
                Product
            </a>
        </div>
        <div id="drop_down">
            <a href="">Chatbot</a>
            <a href="">Live Chat</a>
            <a href="">Marketing & Sales</a>
            <a href="">Support</a>
            <a href="">Templates</a>
        </div>
    </div>
    <div>
        <a href="../whatapp/whatsapp.html">
            WhatsApp
        </a>
    </div>
    <div>
        <a href="">Instagram</a>
    </div>
    <div>
        <a href="">
            Pricing
        </a>
    </div>
    <div>
        <a href="">Login</a>
    </div>
    <div>
        <a href="">
            <button id="nav_b1">Free Trial</button>
        </a>
        <a href="">
            <button id="nav_b2">Book Demo</button>
        </a>
    </div>
</div>`;
  } else {
    return `<div id="main_logo">
        <img src="https://transcendent-alpaca-eab5f9.netlify.app/img/Screenshot%202022-07-19%20152729.png" alt="">
    </div>
    <div id="nav_menu">
        <div id="product">
            <div>
                <a href="">
                    Product
                </a>
            </div>
            <div id="drop_down">
                <a href="">Chatbot</a>
                <a href="">Live Chat</a>
                <a href="">Marketing & Sales</a>
                <a href="">Support</a>
                <a href="">Templates</a>
            </div>
        </div>
        <div>
            <a href="./whatsapp/whatsapp.html">
                WhatsApp
            </a>
        </div>
        <div>
            <a href="">Instagram</a>
        </div>
        <div>
            <a href="">
                Pricing
            </a>
        </div>
        <div>
            <a href="">Login</a>
        </div>
        <div>
            <a href="">
                <button id="nav_b1">Free Trial</button>
            </a>
            <a href="">
                <button id="nav_b2">Book Demo</button>
            </a>
        </div>
    </div>
    `;
  }
}

export default navbar;
