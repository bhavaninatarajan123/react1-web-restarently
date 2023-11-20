function Reservation(){
    return(
    <div>

    </div>
    ><div id="reservation">
	<div class="container">
		<div class="head">
					<p>RESERVATION</p>
					<h1>Book a Table</h1>
		</div>
			<div class="reser-row">
				<div class="reser-col">
					<input type="text"placeholder="Your Name"/>
				</div>
				<div class="reser-col">
					<input type="email"placeholder="Your Email"/>
				</div>
				<div class="reser-col">
					<input type="text"placeholder="Your Phone"/>
				</div>
				<div class="reser-col">
					<input type="text"placeholder="Date"/>
				</div>
				<div class="reser-col">
					<input type="text"placeholder="Time"/>
				</div>
				<div class="reser-col">
					<input type="number"placeholder="# of people"/>
				</div>
			</div>
			<div class="reser-text">
				<textarea placeholder="Message"></textarea>
			</div>
				<div class="reser-btn">
					<button>Book A Table</button>
				</div>
	</div>
</div>
		)}

export default Reservation ;        