document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".accordion-title");
  
    titles.forEach(title => {
      title.addEventListener("click", () => {
        const targetId = title.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
  
        // Toggle the clicked section
        if (targetContent.classList.contains("active")) {
          targetContent.classList.remove("active");
        } else {
          // Optionally collapse others
          document.querySelectorAll(".accordion-content").forEach(content => {
            content.classList.remove("active");
          });
  
          targetContent.classList.add("active");
        }
      });
    });
  });
  