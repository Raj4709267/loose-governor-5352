let chatbox = () => {
  return `  <button class="open-button" onclick="openForm()"><img
  src="https://custpostimages.s3.ap-south-1.amazonaws.com/11/1656651762764.jpg" alt=""></button>

<div class="chat-popup" id="myForm">
<div id="c_top_logo">
  <img src="https://custpostimages.s3.ap-south-1.amazonaws.com/11/1656651684852.jpg" alt="">
  <button onclick="closeForm()"><img
          src="https://preeminent-biscuit-a116d5.netlify.app/Screenshot%202022-07-22%20114122.png"
          alt=""></button>
  <p>SmarBot</p>
  <p>Automate Conversations to Acquire,Engage & Support Customers.</p>
</div>
<div id="chat_body">
  <div>
      <img src="https://custpostimages.s3.ap-south-1.amazonaws.com/11/1656651762764.jpg" alt="">
      <div>
          <p>Are you looking for <b>WhatsApp chatbot?</b> </p>
      </div>
  </div>
  <div id="chat_ans">
      <p>Yes</p>
      <p>No</p>
  </div>
</div>
</div>

`;
};

export default chatbox;