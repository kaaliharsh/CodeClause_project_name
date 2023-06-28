const githubForm = document.getElementById('githubForm');
const userDetails = document.getElementById('userDetails');

githubForm.addEventListener('submit', getUserDetails);

async function getUserDetails(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;

  if (username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();

      if (response.ok) {
        displayUserDetails(userData);
      } else {
        displayErrorMessage(userData.message);
      }
    } catch (error) {
      displayErrorMessage('An error occurred while fetching user data.');
    }
  }
}

function displayUserDetails(user) {
  userDetails.innerHTML = `
    <div class="user-info">
      <span>Name:</span> ${user.name ? user.name : 'Not available'}
    </div>
    <div class="user-info">
      <span>Username:</span> ${user.login}
    </div>
    <div class="user-info">
      <span>Repositories:</span> ${user.public_repos}
    </div>
    <div class="user-info">
      <span>Followers:</span> ${user.followers}
    </div>
    <div class="user-info">
      <a href="${user.html_url}" target="_blank"> Click Here to View Profile on GitHub</a>
    </div>
  `;
}

function displayErrorMessage(message) {
  userDetails.innerHTML = `<p class="error">${message}</p>`;
}
