const root = document.getElementById("root");

function Article() {
  const article = document.createElement("article");
  article.textContent = "<h1>Hello</h1>"
  root.appendChild(article);
}