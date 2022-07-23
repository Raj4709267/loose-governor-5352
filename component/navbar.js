function navbar(page) {
    if(page === "insta"){
        return `<div id="main_logo" onclick="index()">
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
            <a href="https://www.smatbot.com/chatbot-landing">Chatbot</a>
            <a href="https://www.smatbot.com/live-chat">Live Chat</a>
            <a href="https://www.smatbot.com/usecases">UseCases</a>
            <a href="https://www.smatbot.com/marketing-sales">Marketing & Sales</a>
            <a href="https://www.smatbot.com/support">Support</a>
            <a href="https://www.smatbot.com/chatbot-templates">Templates</a>
        </div>
    </div>
    <div>
        <a href="../day-2 whatapp/whatapp1.html">
            WhatsApp
        </a>
    </div>
    <div  style="border-bottom: 2px solid blue; ">
    <a style="color: blue;" href="../day -4  Insta/insta.html">Instagram</a>
    </div>
    <div>
        <a href="../pricing/price.html">
            Pricing
        </a>
    </div>
    <div>
        <a href="../loginSignup/Login.html">Login</a>
    </div>
    <div>
        <a href="../loginSignup/SignUp.html">
            <button id="nav_b1">Free Trial</button>
        </a>
        <a href="https://www.page.smatbot.com/?name=Demo_Bot&id=12763&book_demo=true">
            <button id="nav_b2">Book Demo</button>
        </a>
    </div>
</div>`
    }
  else if (page === "whatsapp") {
    return `<div id="main_logo" onclick="index()">
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
            <a href="https://www.smatbot.com/chatbot-landing">Chatbot</a>
            <a href="https://www.smatbot.com/live-chat">Live Chat</a>
            <a href="https://www.smatbot.com/usecases">UseCases</a>
            <a href="https://www.smatbot.com/marketing-sales">Marketing & Sales</a>
            <a href="https://www.smatbot.com/support">Support</a>
            <a href="https://www.smatbot.com/chatbot-templates">Templates</a>
        </div>
    </div>
    <div style="border-bottom: 2px solid blue; ">
        <a style="color: blue;" href="../day-2 whatapp/whatapp1.html">
            WhatsApp
        </a>
    </div>
    <div>
    <a href="../day -4  Insta/insta.html">Instagram</a>
    </div>
    <div>
        <a href="../pricing/price.html">
            Pricing
        </a>
    </div>
    <div>
        <a href="../loginSignup/Login.html">Login</a>
    </div>
    <div>
        <a href="../loginSignup/SignUp.html">
            <button id="nav_b1">Free Trial</button>
        </a>
        <a href="https://www.page.smatbot.com/?name=Demo_Bot&id=12763&book_demo=true">
            <button id="nav_b2">Book Demo</button>
        </a>
    </div>
</div>`;
  } else {
    return `<div id="main_logo" onclick="index()">
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
            <a href="https://www.smatbot.com/chatbot-landing">Chatbot</a>
            <a href="https://www.smatbot.com/live-chat">Live Chat</a>
            <a href="https://www.smatbot.com/usecases">UseCases</a>
            <a href="https://www.smatbot.com/marketing-sales">Marketing & Sales</a>
            <a href="https://www.smatbot.com/support">Support</a>
            <a href="https://www.smatbot.com/chatbot-templates">Templates</a>
            </div>
        </div>
        <div style="color:blue;">
            <a href="../day-2 whatapp/whatapp1.html">
                WhatsApp
            </a>
        </div>
        <div>
        <a href="../day -4  Insta/insta.html">Instagram</a>
        </div>
        <div>
            <a href="../pricing/price.html">
                Pricing
            </a>
        </div>
        <div>
            <a href="../loginSignup/Login.html">Login</a>
        </div>
        <div>
            <a href="../loginSignup/SignUp.html">
                <button id="nav_b1">Free Trial</button>
            </a>
            <a href="https://www.page.smatbot.com/?name=Demo_Bot&id=12763&book_demo=true">
                <button id="nav_b2">Book Demo</button>
            </a>
        </div>
    </div>
    `;
  }
}

export default navbar;
