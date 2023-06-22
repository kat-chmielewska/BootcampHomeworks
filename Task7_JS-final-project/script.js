const inputSearch = document.getElementById("container__searcher");
document.querySelector("container__content");

// Displaying a specific git hub profile on a page

const paragraphsDiv = document.querySelector(".content__textBox__reposName");

function delfautUserFunction() {
  fetch("https://api.github.com/users/kat-chmielewska").then((response) =>
    response.json().then((data) => {
      /* User Name */
      document.querySelector("#content__textBox--userName").innerHTML = data.name;

      /* User Login */
      const userLoginURL = document.querySelector("#content__textBox--login");
      userLoginURL.innerHTML = `@${data.login}`;
      userLoginURL.setAttribute("href", `${data.html_url}`);
      userLoginURL.setAttribute("target", "_blank");

      /* User Bio */
      let userBio = document.querySelector("#content__textBox--subtitle");

      if (data.bio == null) {
        userBio.innerHTML = "Description not provided";
      } else {
        userBio.innerHTML = data.bio;
      }
      /* User Followers */
      document.querySelector("#content__textBox--followers").innerHTML = `${data.followers} Followers`;

      /* User Following */
      document.querySelector("#content__textBox--following").innerHTML = `${data.following} Following`;

      /* User number repos */
      document.querySelector("#content__textBox--repos").innerHTML = `${data.public_repos} Repos`;

      /* User Photo */
      let userPhoto = document.querySelector(".container__content__imageBox");
      userPhoto.innerHTML = `<img src="${data.avatar_url}" />`;
    })
  );

  fetch(`https://api.github.com/users/kat-chmielewska/repos`).then((response) =>
    response.json().then((dataRepos) => {
      /* User Repos Names */

      dataRepos.forEach(function (element) {
        const addNewRepoLink = document.createElement("a");
        const addNewParagraph = document.createElement("p");
        addNewRepoLink.setAttribute("href", `${element.html_url}`);
        addNewRepoLink.setAttribute("target", "blank");
        addNewRepoLink.appendChild(addNewParagraph);
        addNewParagraph.appendChild(document.createTextNode(element.name));
        addNewParagraph.setAttribute("class", "content__textBox--paragraph");
        paragraphsDiv.appendChild(addNewRepoLink);
      });
    })
  );
}

delfautUserFunction();

// GitHub Profile Finder
inputSearch.addEventListener("change", () => {
  const searchValue = inputSearch.value;
  const userSearchURL = `https://api.github.com/users/${searchValue}`;

  searchValue.split(" ").join("");

  fetch(userSearchURL).then((response) =>
    response.json().then((data) => {
      /* User Name */
      document.querySelector("#content__textBox--userName").innerHTML = data.name;

      /* User Login */
      const userLoginURL = document.querySelector("#content__textBox--login");
      userLoginURL.innerHTML = `@${data.login}`;
      userLoginURL.setAttribute("href", `${data.html_url}`);
      userLoginURL.setAttribute("target", "blank");

      /* User Bio */
      let userBio = document.querySelector("#content__textBox--subtitle");

      if (data.bio == null) {
        userBio.innerHTML = "Description not provided";
      } else {
        userBio.innerHTML = data.bio;
      }

      /* User Followers */
      document.querySelector("#content__textBox--followers").innerHTML = `${data.followers} Followers`;

      /* User Following */
      document.querySelector("#content__textBox--following").innerHTML = `${data.following} Following`;

      /* User number repos */
      document.querySelector("#content__textBox--repos").innerHTML = `${data.public_repos} Repos`;

      /* User Photo */
      let userPhoto = document.querySelector(".container__content__imageBox");
      userPhoto.innerHTML = `<img src="${data.avatar_url}" />`;
    })
  );

  paragraphsDiv.innerHTML = "";

  fetch(`https://api.github.com/users/${searchValue}/repos`).then((response) =>
    response.json().then((dataRepos) => {
      /* User Repos Names */

      dataRepos.forEach(function (element, index) {
        if (index < 5) {
          const addNewRepoLink = document.createElement("a");
          const addNewParagraph = document.createElement("p");
          addNewRepoLink.setAttribute("href", `${element.html_url}`);
          addNewRepoLink.setAttribute("target", "blank");
          addNewRepoLink.appendChild(addNewParagraph);
          addNewParagraph.appendChild(document.createTextNode(element.name));
          addNewParagraph.setAttribute("class", "content__textBox--paragraph");
          paragraphsDiv.appendChild(addNewRepoLink);
        }
      });
    })
  );
});
