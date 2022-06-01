class TestimonialsDisplayer {

	isSubfolder = null;

	/**
	 * @description This function runs the rendering proces of the testimonials
	 */
	constructor(isSubfolder) {
		this.isSubfolder = isSubfolder;
		// Calling the initialize function
		this.displayTestimonials();
	}

	/**
	 * @returns Returns the data of the red file
	 */
	fetchData = async () => {
		if (this.isSubfolder === true) {
			return await fetch("../assets/data/testimonials.json")
			.then(response => response.json())
			.then(data => {
				return data;
			});	
		} else {
			return await fetch("./assets/data/testimonials.json")
				.then(response => response.json())
				.then(data => {
					return data;
				});
		}
	}

	displayTestimonials = async () => {
		let data = null;
		data = await this.fetchData();

		/*
			TESTIMONIALS ELEMENT
			<div class="item">
				<div class="item-inner">
					<div class="quote-holder">
						<blockquote class="quote-content">
							Lorem ipsum dolor sit amet, consectetuer
							adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
							natoque penatibus et magnis.
						</blockquote>
						<i class="fas fa-quote-left"></i>
					</div>
					<div class="source-holder">
						<div class="source-profile">
							<img src="https://www.homeandhelp.com/img/pages/32/a3a42e4e9d84f01cd08d0832682ab694.jpg" alt="image" />
						</div>
						<div class="meta">
							<div class="name">John Doe</div>
							<div class="info">Project Manager, Google</div>
						</div>
					</div>
				</div>
			</div>
		*/

		const testimonialsElem = document.getElementById("testimonials");

		data.forEach(element => {
			const tempElem = document.createElement("div");
			tempElem.classList.add("testimonial");

			tempElem.innerHTML = `
				<div class="item">
					<div class="item-inner">
						<div class="quote-holder">
							<blockquote class="quote-content">${element["text"]}</blockquote>
							<i class="fas fa-quote-left"></i>
						</div>
						<div class="source-holder">
							<div class="source-profile">
								<img src="${element["image"]}" alt="Picture of ${element["name"]}" />
							</div>
							<div class="meta">
								<div class="name">${element["name"]}</div>
								<div class="info">${element["role"]}</div>
							</div>
						</div>
					</div>
				</div>
			`;

			// Append the element to the list
			testimonialsElem.appendChild(tempElem);
		});

		this.initCarousel();
	}

	initCarousel = () => {
		const slider = tns({
			container: '.testimonial-carousel',
			loop: true,
			items: 3,
			responsive: {
				0:{
					items:1,
				},
				768:{
					items:2,
				},
				1200: {
					items:3,
				}
		
			},
			slideBy: 'page',
			nav: false,    
			autoplay: true,
			autoplayButtonOutput: false,
			mouseDrag: true,
			lazyload: false,
			gutter: 30,
			navPosition: 'bottom',
			mouseDrag: true,
			controls: false,
			speed: 800,
		});
	}
}