import navbar from "../component/navbar.js"

document.querySelector("#navbar").innerHTML=navbar()







document.querySelector("#i1").addEventListener("click",first)
function first()
{
document.querySelector("#second").innerHTML=`<div>
                <p id="p0">"</p>
                
                <h1>Very Supporting and ready to help with our requirement</h1>
                <p id="p1">"We could provide 24/7 support to our Sales Staff & Customers, which got them satisfied timely resolutions. It reduced our workload, enabling our support staff to work on prioritizing customer requirements. Interface is simple & user friendly. Integration was very Simple. Thanks to the entire team"</p>
               
                <p id="p2">- Rekha</p>
                <p id="p3">Senior Manager, Ecaps</p>
                
            </div>`;
}
document.querySelector("#i2").addEventListener("click",sec)
function sec()
    { document.querySelector("#second").innerHTML=`<div>
    <p id="p0">"</p>
    
    <h1>Smatbot is such an amazing product</h1>
    <p id="p1">"“Smatbot is such an amazing productI would recommend
         smatbot for any company mainly because of its ease of use, 
         multi-featured and multichannel chatbot. It has been a year 
         since I used smatbot and seen tremendous upgrades features that no other 
         chatbot provider can have which can happen only with an Amazing team."</p>
   
    <p id="p2">-Rajesh</p>
    <p id="p3">Founder, Forward Parcel
    </p>
   
</div>`;
    }

    document.querySelector("#i3").addEventListener("click",third)
function third()
    {
        document.querySelector("#second").innerHTML=`<div>
    <p id="p0">"</p>
    
    <h1>Easy to develop and maintain for non technical user</h1>
    <p id="p1">"Very flexible. Customer support is always available.
         Smatbot helped us Increase our lead flow by 30%. Customer engagement went up by 60%"</p>
   
    <p id="p2">-Shriram Samant </p>
    <p id="p3">Data Analyst, Mediaqart</p>
   
</div>`;
    }

    document.querySelector("#i4").addEventListener("click",fourth)
function fourth()
    {
        document.querySelector("#second").innerHTML=`<div>
    <p id="p0">"</p>
    
    <h1>Amazing team to work with</h1>
    <p id="p1">"Smatbot has a very simple User Interface. They have Simplified all the 
        necessary things we need to build a chatbot. Provides Analytics to improve the bot overtime.
         Their Continued Support is always available to listen to our requirements"</p>
   
    <p id="p2">-Rama Krishna </p>
    <p id="p3">Founder, Care India</p>
    
</div>`;
    }



    // footer  ////
    import footer from "../component/footer.js"
    document.querySelector("#footer").innerHTML=footer()
