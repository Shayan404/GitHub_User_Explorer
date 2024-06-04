let userData = [];
function fethData() {
  let promise = fetch("https://api.github.com/users");

  let jsonData = promise.then((data) => {
    return data.json();
  });

  jsonData.then((user) => {
    userData = user;
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
    let section = document.createElement("section");
    section.style.height = "auto";
    section.style.width = "100%";
    section.style.display = "flex";
    section.style.justifyContent = "center";
    section.style.flexWrap = "wrap";
    section.style.background = "black";
    document.body.append(section);
    userData.map((users) => {
      console.log(users);
      let article = document.createElement("article");
      article.style.height = "400px";
      article.style.width = "300px";
      article.style.margin = "10px";
      article.style.display = "flex";
      article.style.flexDirection = "column";
      article.style.alignItems = "center";
      article.style.background = "#0e132d";

      article.style.border = "2px solid white";
      section.append(article);

      let img = document.createElement("img");
      img.src = users.avatar_url;
      img.style.height = "200px";
      img.style.width = "200px";
      img.style.borderRadius = "100px";
      img.style.marginTop = "25px";
      article.append(img);

      let description = document.createElement("div");
      description.style.height = "150px";
      description.style.width = "100%";
      description.style.border = "2px solid white";
      description.style.marginTop = "30px";
      description.style.textAlign = "center";
      description.style.color = "white";

      description.style.bottom = "0";
      article.append(description);

      let h1 = document.createElement("h1");
      let h4 = document.createElement("h4");
      h1.innerText = `Name :${users.login}`;
      h4.innerText = `ID : ${users.id}`;
      h1.style.fontSize = "20px";
      h4.style.fontSize = "20px";

      description.append(h1, h4);
    });
  });
}
fethData();
