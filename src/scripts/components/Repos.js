function createMarkup(data) {
  console.log(data);

  return `
	${data
    .map(
      data => `
		<article>
			<header>
				<h1>
					<a href="${data.html_url}" target="_blank">${data.name}</a>
				</h1>
			</header>
			<section>
				${data.description != null ? `<p>${data.description}</p>` : ''}
			</section>
			<footer>
				${data.language != null ? `<p>Language: ${data.language}</p>` : ''}
				${data.stargazers_count != null ? `<p>Stars: ${data.stargazers_count}</p>` : ''}
				${data.forks != null ? `<p>Forks: ${data.forks}</p>` : ''}
			</footer>
		</article>
		`
    )
    .join("\n ")}`;
}

export default function renderRepos(data, element) {
  element.innerHTML = createMarkup(data);
  return data;
}
