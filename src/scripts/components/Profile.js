function createMarkup(data) {
  return `
		<article class="gh-user">
			<div class="gh-picture">
				<picture class="avatar">
						<img src="${data.avatar_url}" alt="${data.name}" />
				</picture>
			</div>
			<h1 class="gh-name">
				<a href="" target="_blank">${data.name != null ? `${data.name}` : `${data.login}`}</a>
			</h1>
      <div class="infos">
					${data.type != null ? `<p><span>Type: </span> ${data.type}</p>` : ''}
					${data.company != null ? `<p><span>Company: </span> ${data.company}</p>` : ''}
					${data.blog != '' ? `<p><span>Blog: </span> ${data.blog}</p>` : ''}
					${data.location != null ? `<p><span>Location: </span> ${data.location}</p>` : ''}
					${data.email != null ? `<p><span>Email: </span> ${data.email}</p>` : ''}
					${data.bio != null ? `<p><span>Bio: </span> ${data.bio}</p>` : ''}
					${data.public_repos != null ? `<p><span>Public Repos: </span> ${data.public_repos}</p>` : ''}
					${data.public_gists != null ? `<p><span>Public Gists: </span> ${data.public_gists}</p>` : ''}
					${data.followers != null ? `<p><span>Followers: </span> ${data.followers}</p>` : ''}
					${data.following != null ? `<p><span>Following: </span> ${data.following}</p>` : ''}
      </div>
    </article>
  `;
}

export default function renderProfile(data, element) {
  const markup = createMarkup(data);
  element.innerHTML = markup;
  return data;
}
