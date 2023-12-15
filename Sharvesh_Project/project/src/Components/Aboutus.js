import "../Assets/Aboutus.css"

const Aboutus = () => {
  return(
    <div class="container" >
    {/* <h1 style="font-size: 40px; color: white">Connect with us</h1> */}
    <p>We would love to respond to your queries and help you succeed.<br/></p>
    <div class="contact-box">
        <div class="contact-left">
            <h3>Send your request</h3>
            <form>
                <div class="input-row">
                <div class="input-group">
                    <label>Name</label>
                    <input type="text" placeholder="Name"/>
                </div>
                <div class="input-group">
                    <label>Phone</label>
                    <input type="number" placeholder="+91 1234567890"/>
                </div>
                </div>
                <div class="input-row">
                    <div class="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="something@gmail.com"/>
                </div>
                <div class="input-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Text"/>
                </div>
                </div>  
                <label>Message</label>
                <textarea rows="5" placeholder="Your message"></textarea>
                <button onclick="myfunction()">SEND</button>
            </form>
        </div>
        <div class="contact-right">
            <h3>Reach Us</h3>
           <table>
            <tr>
            <td>Email</td>
            <td>contactus@example.com</td>
        </tr>
        <tr>
            <td>Phone</td>
            <td>+91 9466926423</td>
        </tr>
        <tr>
            <td>Address</td>
            <td>Street:  22 Main Road
                City:  Bengaluru 
                 070 0838 1384
                 DD3 6HF
                 India</td>
        </tr>
           </table>
        </div>
    </div>
</div>
  )
}

export default Aboutus;