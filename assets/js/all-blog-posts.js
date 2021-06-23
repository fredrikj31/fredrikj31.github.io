const blogPostsHTML = document.getElementById("blogPosts");
const loadingIcon = document.getElementById("loadingIcon");

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
	loadingIcon.style.display = "none";
	console.log(data);
	var blogPosts = data["data"]["user"]["publication"]["posts"];

	blogPosts.forEach(element => {
		var dateAgo = moment(element["dateAdded"]).fromNow();
		if (element["coverImage"] == "") {
			blogPostsHTML.insertAdjacentHTML(
				"beforeend",
				`<div class="col-md-4 mb-3">
					<div class="card blog-post-card">
						<div class="card-body">
							<h5 class="card-title"><a class="theme-link" href="https://fredrikj31.hashnode.dev/${element["slug"]}" target="_blank">${element["title"]}</a></h5>
							<p class="card-text">${element["brief"]}</p>
							<p class="mb-0"><a class="more-link" href="https://fredrikj31.hashnode.dev/${element["slug"]}" target="_blank">Read more &rarr;</a></p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Published ${dateAgo}</small>
						</div>
					</div><!--//card-->
				</div>`
			);
		} else {
			console.log(element)
			blogPostsHTML.insertAdjacentHTML(
				"beforeend",
				`<div class="col-md-4 mb-3">
					<div class="card blog-post-card">
						<img class="card-img-top" src="${element["coverImage"]}" alt="image">
						<div class="card-body">
							<h5 class="card-title"><a class="theme-link" href="https://fredrikj31.hashnode.dev/${element["slug"]}">${element["title"]}</a></h5>
							<p class="card-text">${element["brief"]}</p>
							<p class="mb-0"><a class="more-link" href="https://fredrikj31.hashnode.dev/${element["slug"]}" target="_blank">Read more &rarr;</a></p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Published ${dateAgo}</small>
						</div>
					</div><!--//card-->
				</div>`
			);
		}
	});
});
