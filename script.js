// Toggle function for hamburger icon (mobile)
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Add skills here (For Skills section card)
const skillsData = [
  {
    title: "Web Development",
    skills: [
      { name: "HTML", icon: "./assets/skills/html5.png" },
      { name: "CSS", icon: "./assets/skills/css3.png" },
      { name: "Javascript", icon: "./assets/skills/javascript.png" },
      { name: "Laravel", icon: "./assets/skills/laravel.png" },
      { name: "MySQL", icon: "./assets/skills/mysql.png" }
    ]
  },
  {
    title: "Software Engineering",
    skills: [
      { name: "VB.NET", icon: "./assets/skills/vbnet.png" },
      { name: "Python", icon: "./assets/skills/python.png" },
      { name: "PostgreSQL", icon: "./assets/skills/postgresql.png" }
    ]
  },
  {
    title: "UI/UX Design",
    skills: [
      { name: "Figma", icon: "./assets/skills/figma.png" }
    ]
  },
  {
    title: "Game Development",
    skills: [
      { name: "Unity", icon: "./assets/skills/unity.png" },
      { name: "C#", icon: "./assets/skills/csharp.png" }
    ]
  }
];

// Add projects here (For Projects section card)
const projects = [
  {
    title: "BeShare UI Design",
    imgSrc: "./assets/projects/beshare.png",
    demoLink: "https://www.figma.com/proto/sZck1Gzosr3C6ITk3tXlcR/ITEBE?node-id=202-2590&p=f&t=a3kEDC1MTt860umT-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=54%3A2353&show-proto-sidebar=1",
    isImageCard: true
  },
  {
    title: "Burung Bird Game",
    imgSrc: "./assets/projects/burungbird.png",
    demoLink: "https://zangrant.itch.io/burung-bird",
    isImageCard: true
  },
  {
    title: "RGB-HEX Converter",
    imgSrc: "./assets/projects/rgbhex.png",
    demoLink: "https://python-hex-rgb-production.up.railway.app/",
    isImageCard: true
  },
  {
    title: "Batamcation Web",
    imgSrc: "./assets/projects/batamcation.png",
    demoLink: "https://batamcation.netlify.app",
    isImageCard: true
  },
  { // Last child----
    title: "Other Projects",
    demoLink: "https://linktr.ee/marvelgrantpangau",
    isImageCard: false
  } //--------------
];

$(function() {
  // Skills section card
  skillsData.forEach(card => {
    const $cardDiv = $("<div>").addClass("skill-card");
    $cardDiv.append($("<h2>").text(card.title));

    const $skillContainer = $("<div>").addClass("article-container");

    card.skills.forEach(skill => {
      const $article = $("<article>");
      const $img = $("<img>").attr("src", skill.icon).attr("alt", "skills").addClass("icon");
      const $skillName = $("<div>").append($("<h3>").text(skill.name));
      $article.append($img).append($skillName);
      $skillContainer.append($article);
    });

    $cardDiv.append($skillContainer);
    $("#skill-cards-container").append($cardDiv);
  });

  // Projects section card
  const $projectContainer = $("#project-cards-container");

  $.each(projects, function(index, project) {
    const $card = $("<div>").addClass("project-card");

    if (project.isImageCard) {
      $("<img>")
        .attr("src", project.imgSrc)
        .attr("alt", "Project")
        .addClass("project-img")
        .appendTo($card);
    }

    $("<h2>").text(project.title).appendTo($card);

    $("<button>")
      .text(project.isImageCard ? "View" : "Linktr.ee")
      .addClass("btn")
      .on("click", function() {
        window.open(project.demoLink, "_blank");
      })
      .appendTo($card);

      $projectContainer.append($card);
  });

  // Typing animation script
  const animationScript = ["Web Development", "UI/UX Design", "Game Development","Programming"];

  new Typed(".typing", {
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  new Typed(".typing2", {
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
