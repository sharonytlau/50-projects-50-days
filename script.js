const h1 = document.querySelector("h1");

projectNames = ["Expanding Cards", "Progress Steps"];

projectNames.forEach((projectName, index) =>
  h1.insertAdjacentHTML(
    "afterend",
    `
  <h2>
    <a href="./${index + 1}-${projectName
      .toLowerCase()
      .split(" ")
      .join("-")}/index.html">
      ${projectName}
    </a>
  </h2>`
  )
);
