

class SidebarDisplayer {

	data = null;

	/**
	 * @description This function runs the rendering proces of the sidebar
	 * @param {String} page The current page the navbar is rendered on
	 */
	constructor(page) {
		if (page === null || page === undefined || page === "") {
			console.error("No page was specified! \nPlease enter a page file, corresponding to the active page.");
			return;
		}

		// Calling the initialize function
		this.displaySidebar();
	}

	/**
	 * @returns Returns the data of the red file
	 */
	fetchData = async () =>  {
		return await fetch("./assets/data/sidebar.json")
			.then(response => response.json())
			.then(data => {
				return data;
			});
	}

	displaySidebar = async () => {
		let data = null;
		data = await this.fetchData();

		console.log(data);

		// Setting the name
		document.getElementById("name").innerText = data["name"];

		// Setting the description
		document.getElementById("description").innerText = data["description"];

		// Setting the socials
		this.addSocials(data["socials"]);
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
			// Creating the li element
			const liElem = document.createElement("li");
			liElem.classList.add("list-inline-item");

			// Creating the a element
			const aElem = document.createElement("a");
			aElem.href = element["link"];
			aElem.target = "_blank";

			// Createing the i/icon element
			const iElem = document.createElement("i");
			element["icon"].forEach(className => {
				iElem.classList.add(className);
			});

			// Creating their relation
			aElem.appendChild(iElem);
			liElem.appendChild(aElem);

			// Adding the element to the list of socials
			socialsList.appendChild(liElem);
		});
	}

}