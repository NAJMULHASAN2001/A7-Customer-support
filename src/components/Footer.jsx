const Footer = () => {
    return (
       <>
     <section className="bg-black text-white ">
         <div className="grid md:grid-cols-5 gap-10 md:gap-30 p-15 md:mt-10">
          <div>
            <h1 className="text-2xl font-bold">CS — Ticket System</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
            <h1 className="text-2xl font-bold">Company</h1>
            <p>About Us</p>
            <p>Our Mission</p>
            <p>Contact Saled</p>
        </div>
        <div>
            <h1 className="text-2xl font-bold">Services</h1>
            <p>Products & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
        </div>
        <div>
            <h1 className="text-2xl font-bold">Information</h1>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Join Us</p>
        </div>
        <div>
            <h1 className="text-2xl font-bold">Social Links</h1>
            <p>@CS — Ticket System</p>
            <p>@CS — Ticket System</p>
            <p>@CS — Ticket System</p>
            <a href="support@cst.com">support@cst.com</a>
        </div>
        
      </div>
      <p className="text-center text-2xl pb-15">© 2026 CS — Ticket System. All rights reserved.</p>
     </section>
       </>
    );
};

export default Footer;