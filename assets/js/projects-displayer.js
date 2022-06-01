class ProjectDisplayer {
	/**
	 * @description This function runs the rendering proces of the projects
	 */
	constructor() {
		// Calling the initialize function
		this.displayProjects();
	}

	/**
	 * @returns Returns the data of the red file
	 */
	fetchData = async () => {
		return await fetch("./assets/data/projects.json")
			.then(response => response.json())
			.then(data => {
				return data;
			});
	}

	displayProjects = async () => {
		let data = null;
		data = await this.fetchData();

		/*
			PROJECT ELEMENT
			<div class="isotope-item col-md-6 mb-5">
				<div class="card project-card">
					<div class="row no-gutters">
						<div class="col-lg-4 card-img-holder">
							<img src="assets/images/project/project-1.jpg" class="card-img" alt="image">
						</div>
						<div class="col-lg-8">
							<div class="card-body">
								<h5 class="card-title"><a href="project.html" class="theme-link">Project Heading</a></h5>
								<p class="card-text">Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
								<p class="card-text"><small class="text-muted">Client: Google</small></p>
							</div>
						</div>
					</div>
					<div class="link-mask">
						<a class="link-mask-link" href="project.html"></a>
						<div class="link-mask-text">
							<a class="btn btn-secondary" href="project.html">
								<i class="fas fa-eye mr-2"></i>View Case Study
							</a>
						</div>
					</div><!--//link-mask-->
				</div><!--//card-->
			</div><!--//col-->
		*/

		const projectsElem = document.getElementById("projects");

		data.forEach(element => {
			/*const isotopeItemElem = document.createElement("div");
			isotopeItemElem.classList.add("isotope-item", "col-md-6", "mb-5");

			const projectCardElem = document.createElement("div");
			projectCardElem.classList.add("card", "project-card");

			const rowElem = document.createElement("div");
			rowElem.classList.add("row", "no-gutters");

			const cardImgHolder = document.createElement("div");
			cardImgHolder.classList.add("col-lg-4", "card-img-holder");

			const projectImg = document.createElement("img");
			projectImg.classList.add("card-img");
			projectImg.src = element["image"];
			projectImg.alt = `Project image of ${element["title"]}`;

			const largeCol = document.createElement("div");
			largeCol.classList.add("col-lg-8");

			const cardBody = document.createElement("div");
			cardBody.classList.add("card-body");

			const cardHeader = document.createElement("h5");
			cardHeader.classList.add("card-title");*/

			const tempElem = document.createElement("project");

			tempElem.innerHTML = `
				<div class="isotope-item col-md-6 mb-5">
					<div class="card project-card">
						<div class="row no-gutters">
							<div class="col-lg-4 card-img-holder">
								<img src="${element["image"]}" class="card-img" alt="Picture of the project ${element["title"]}">
							</div>
							<div class="col-lg-8">
								<div class="card-body">
									<h5 class="card-title"><a href="${element["link"]}" class="theme-link">${element["title"]}</a></h5>
									<p class="card-text">${element["description"]}</p>
									<p class="card-text"><small class="text-muted">${element["footer"]}</small></p>
								</div>
							</div>
						</div>
						<div class="link-mask">
							<a class="link-mask-link" href="${element["link"]}"></a>
							<div class="link-mask-text">
								<a class="btn btn-secondary" href="${element["link"]}">
									<i class="fas fa-eye mr-2"></i>View Case Study
								</a>
							</div>
						</div>
					</div>
				</div>
			`;

			projectsElem.appendChild(tempElem);
		});
	}
}