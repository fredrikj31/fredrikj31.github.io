const blogPostsHTML = document.getElementById("latestBlogPosts");

fetch("https://api.hashnode.com/", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
	body: JSON.stringify({
		query: `
					query{
						user(username: "fredrikj31") {
							publication {
								posts {
									title
									brief
									dateAdded
									slug
									coverImage
								}
							}
						}
					}
				`,
	}),
}).then(r => r.json())
.then((data) => {
	var blogPosts = data["data"]["user"]["publication"]["posts"];

	for (let index = 0; index < blogPosts.length; index++) {
		var dateAgo = moment(blogPosts[index]["dateAdded"]).fromNow();
		console.log(dateAgo);
		if (blogPosts[index]["coverImage"] == "") {
			blogPostsHTML.insertAdjacentHTML(
				"beforeend",
				`<div class="col-md-4 mb-5">
					<div class="card blog-post-card">
						<div class="card-body">
							<h5 class="card-title"><a class="theme-link" rel="noreferrer" href="https://fredrikj31.hashnode.dev/${blogPosts[index]["slug"]}" target="_blank">${blogPosts[index]["title"]}</a></h5>
							<p class="card-text">${blogPosts[index]["brief"]}</p>
							<p class="mb-0"><a class="more-link" rel="noreferrer" href="https://fredrikj31.hashnode.dev/${blogPosts[index]["slug"]}" target="_blank">Read more &rarr;</a></p>
						</div>
						<div class="card-footer">
							<small class="text-muted">${dateAgo}</small>
	
						</div>
					</div>
				</div>`
			);
		} else {
			blogPostsHTML.insertAdjacentHTML(
				"beforeend",
				`<div class="col-md-4 mb-5">
					<div class="card blog-post-card">
						<img class="card-img-top" src="${blogPosts[index]["coverImage"]}" alt="image">
						<div class="card-body">
							<h5 class="card-title"><a class="theme-link" rel="noreferrer" href="https://fredrikj31.hashnode.dev/${blogPosts[index]["slug"]}" target="_blank">${blogPosts[index]["title"]}</a></h5>
							<p class="card-text">${blogPosts[index]["brief"]}</p>
							<p class="mb-0"><a class="more-link" rel="noreferrer" href="https://fredrikj31.hashnode.dev/${blogPosts[index]["slug"]}" target="_blank">Read more &rarr;</a></p>
						</div>
						<div class="card-footer">
							<small class="text-muted">${dateAgo}</small>
	
						</div>
					</div>
				</div>`
			);
		}
	}
});
