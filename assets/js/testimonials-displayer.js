class TestimonialsDisplayer {
	/**
	 * @description This function runs the rendering proces of the testimonials
	 */
	constructor() {
		// Calling the initialize function
		this.displayTestimonials();
	}

	/**
	 * @returns Returns the data of the red file
	 */
	fetchData = async () => {
		return await fetch("./assets/data/testimonials.json")
			.then(response => response.json())
			.then(data => {
				return data;
			});
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
			const itemElem = document.createElement("div");
			itemElem.classList.add("item");
	
			const itemInnerElem = document.createElement("div");
			itemInnerElem.classList.add("item-inner");
	
			const quoteHolderElem = document.createElement("div");
			quoteHolderElem.classList.add("quote-holder");
	
			const quoteContentElem = document.createElement("blockquote");
			quoteContentElem.classList.add("quote-content");
			quoteContentElem.innerText = element["text"];

			const quoteIconElem = document.createElement("i");
			quoteIconElem.classList.add("fas", "fa-quote-left");

			const sourceHolderElem = document.createElement("div");
			sourceHolderElem.classList.add("source-holder");

			const sourceProfileElem = document.createElement("div");
			sourceProfileElem.classList.add("source-profile");

			const imageElem = document.createElement("img");
			imageElem.src = element["picture"];
			imageElem.alt = `Profile Picture of ${element["name"]}`;

			const metaElem = document.createElement("div");
			metaElem.classList.add("meta");

			const nameElem = document.createElement("div");
			nameElem.classList.add("name");
			nameElem.innerText = element["name"];

			const roleElem = document.createElement("div");
			roleElem.classList.add("info");
			roleElem.innerText = element["role"];

			// Adding the relations
			metaElem.appendChild(nameElem);
			metaElem.appendChild(roleElem);

			sourceProfileElem.appendChild(imageElem);
			
			sourceHolderElem.appendChild(sourceProfileElem);
			sourceHolderElem.appendChild(metaElem);

			quoteHolderElem.appendChild(quoteContentElem);
			quoteHolderElem.appendChild(quoteIconElem);

			itemInnerElem.appendChild(quoteHolderElem);
			itemInnerElem.appendChild(sourceHolderElem);

			itemElem.appendChild(itemInnerElem);

			// Append the element to the list
			testimonialsElem.appendChild(itemElem);
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