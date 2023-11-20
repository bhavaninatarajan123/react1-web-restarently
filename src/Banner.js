function Banner(){
    return(
    <div>
            <section id="banner">	
		<header className="head-section">
			
			<div className="head-container">
			
			<div className="head-icon">
				<div className="head-icon1">
					<h4><i className="fa fa-mobile" aria-hidden="true"></i>+1 5589 55488 55</h4>
					<h4><i className="fa fa-clock-o" aria-hidden="true"></i>Mon-Sat: 11AM - 23PM</h4>
				</div>
				<p><span>En</span> / De</p>
			</div>
			
			
			
				<div className="header-row">
					<div className="logo">
						<h2>RESTARANTLY</h2>
					</div>
					<nav className="head-navigation">
						<ul className="head-list">
							<li><a href="#banner">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#menu">Menu</a></li>
							<li><a href="#special">Special</a></li>
							<li><a href="#chefs">Chefs</a></li>
							<li><a href="#gallery">Gallery</a></li>
							<li className="dropdown-menu"><a href="#dropdown">DropDown <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
								<ul className="dropdown">
									<li>DropDown1</li>
									<li className="deepdropdown-menu">DeepDropDown<i class="fa fa-chevron-left" aria-hidden="true"></i>
										<ul className="deepdropdown">
											<li>DeepDropDown1</li>
											<li>DeepDropDown2</li>
											<li>DeepDropDown3</li>
											<li>DeepDropDown4</li>
											<li>DeepDropDown5</li>
										</ul>
									</li>
									<li>DropDown2</li>
									<li>DropDown3</li>
									<li>DropDown4</li>
								</ul>
							</li>
							<li><a href="#contact" class="cons">Contact</a></li>
						</ul>
					</nav>
					<div className="head-button">
						<a href="#">BOOKATABLE</a>
					</div>
					<div className="head-bar">
						<i className="fa fa-bars" aria-hidden="true"></i>
					</div>
				</div>
			</div>
			</header>
		
		
		
			<div className="container">
			
				<div className="ban-row">
					<h1>Welcome to <span>Restaurantly</span></h1>
						<div className="icon">
							<h3>Delivering great food for more than 18 years!</h3>
								<div className="ban-play">
									<div className="ban-icon">
										<i className="fa fa-play" aria-hidden="true"></i>
									</div>
								</div>
						</div>
							<div className="button">
								<a href="#">OUR MENU</a>
								<a href="#">BOOK A TABLE</a>
							</div>
				</div>
			</div>
		</section>
	</div>
    )
}	
export default Banner;