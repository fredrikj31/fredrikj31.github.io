

class SidebarDisplayer {

	data = null;
	isSubFolder = null;

	/**
	 * @description This function runs the rendering proces of the sidebar
	 * @param {String} page The current page the navbar is rendered on
	 */
	constructor(page, isSubFolder) {
		if (page === null || page === undefined || page === "") {
			console.error("No page was specified! \nPlease enter a page file, corresponding to the active page.");
			return;
		}

		this.isSubFolder = isSubFolder;

		// Calling the initialize function
		this.displaySidebar(page);
	}

	/**
	 * @returns Returns the data of the red file
	 */
	fetchData = async () =>  {

		if (this.isSubFolder === true) {
			return await fetch("../assets/data/sidebar.json")
			.then(response => response.json())
			.then(data => {
				return data;
			});
		} else {
			return await fetch("./assets/data/sidebar.json")
				.then(response => response.json())
				.then(data => {
					return data;
				});
		}

	}

	displaySidebar = async (activePage) => {
		let data = null;
		data = await this.fetchData();

		//console.log(data);

		// Setting the name
		document.getElementById("name").innerText = data["name"];

		// Setting the description
		document.getElementById("description").innerText = data["description"];

		// Setting the socials
		this.addSocials(data["socials"]);

		// Setting the pages
		this.addPages(data["pages"], activePage);
	}

	/**
	 * @description Adds the socials to the sidebar
	 * @param {array} socials A list of socials from the json file
	 */
	addSocials = (socials) => {
		/*
			SOCIAL ELEMENT
			<li class="list-inline-item">
				<a href="https://twitter.com/fredrikj31" target="_blank">
					<i class="fab fa-twitter fa-fw"></i>
				</a>
			</li>
		*/
		const socialsList = document.getElementById("socials");

		socials.forEach(element => {
			const tempElem = document.createElement("li");
			tempElem.classList.add("list-inline-item");

			tempElem.innerHTML = `
				<a href="${element["link"]}" target="_blank">
					<i class="${element["icon"]}"></i>
				</a>
			`;

			// Adding the element to the list of socials
			socialsList.appendChild(tempElem);
		});
	}

	/**
	 * 
	 * @param {array} pages A list of pages from the json file 
	 * @param {string} activePage Name of the active page
	 */
	addPages = (pages, activePage) => {
		/*
			PAGE ELEMENT
			<li class="nav-item active">
				<a class="nav-link" href="index.html">
					<i class="fas fa-user fa-fw mr-2"></i>
					About Me
				</a>
			</li>
		*/

		const pagesList = document.getElementById("pages");

		pages.forEach(element => {
			const tempElem = document.createElement("div");
			tempElem.classList.add("page");

			tempElem.innerHTML = `
				<li class="nav-item ${element["link"] === activePage ? "active" : ""}">
					<a class="nav-link" href="${(this.isSubFolder) ? "../" : "./"}${element["link"]}">
						<i class="${element["icon"]} mr-2"></i>
						${element["text"]}
					</a>
				</li>
			`;

			pagesList.appendChild(tempElem);
		});
	}

}