class ProjectDisplayer {
	projectLimit = null;

	/**
	 * @description This function runs the rendering proces of the projects
	 */
	constructor(limit) {
		this.projectLimit = limit;

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

		for (let index = 0; index < (this.projectLimit === null ? data.length + 1 : this.projectLimit); index++) {
			const element = data[index];
			
			const tempElem = document.createElement("div");
			tempElem.classList.add("isotope-item", "col-md-6", "mb-5");

			tempElem.innerHTML = `
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
			`;

			projectsElem.appendChild(tempElem);
		}
	}
}