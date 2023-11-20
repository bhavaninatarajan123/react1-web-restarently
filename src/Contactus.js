function Contactus (){
    return(
    <div>
        <section id="contact">
			<div className="container">
				<div className="head">
					<p>CONTACT</p>
					<h1>Contact Us</h1>
				</div>
			</div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24194.89157059023!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1688669465726!5m2!1sen!2sus"style={{width:"100%", height:"300" ,border:0, allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
			<div className="container">
			
				<div className="cont-row">
					<div className="contact-col">
					<div className="cont-col-1">
						<a href="#"><i class="fa fa-map-marker fa-2x" aria-hidden="true"></i></a>
						<small><b>Location:</b><br/> A108 Adams Street,New York,NY 535022</small>
						</div>
					
					<div className="cont-col-2">
						<a href="#"><i class="fa fa-clock-o fa-lg" aria-hidden="true"></i></a>
						
						<small><b>Open Hours:</b> monday-Saturday:<br/>11:00 AM - 23:00 PM</small>
					</div>
				
					<div className="cont-col-3">
						<a href="#"><i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i></a>
						
						<small><b>Email:</b><br/> info@example.com</small>
					</div>
					
					<div className="cont-col-4">
						<a href="#"><i class="fa fa-mobile fa-2x" aria-hidden="true"></i></a>
						
						<small><b>Call:</b><br/> + 15589 55488 55s</small>
					</div>
				</div>
					<div className="cont-form-col">
						<div className="form-name">
							<input type="text"placeholder="Your Name"/>
							</div>
							<div className="form-name">
								<input type="email"placeholder="Your Email"/>
							</div>
							<div class="cont-form-subject">
								<input type="text"placeholder="Subject"/>
							</div>
							<div className="cont-form-subject">
								<textarea placeholder="Message"></textarea>
							</div>
							<div className="form-button">
								<button>Send Message</button>
							</div>
						</div>	
					</div>
				</div>
			
		</section>
    </div>
    )
}
export default Contactus ;