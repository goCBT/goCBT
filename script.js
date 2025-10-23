const carouselData = {
  subjects: [
    { name: "Mathematics", icon: "📐" },
    { name: "Chemistry", icon: "🧪" },
    { name: "Biology", icon: "🌿" },
    { name: "Physics", icon: "⚛️" },
  ],
  exams: [
    { name: "WAEC", icon: "☀️" },
    { name: "JAMB", icon: "🎓" },
    { name: "NECO", icon: "🔥" },
  ],
  courses: [
    { name: "CBT Mastery", icon: "🧠" },
    { name: "Confidence Toolkit", icon: "💪" },
    { name: "Facilitator Training", icon: "👨‍🏫" },
  ],
};

function showCarousel(type) {
  const container = document.getElementById("carousel");
  container.innerHTML = "";
  carouselData[type].forEach(item => {
    const div = document.createElement("div");
    div.className = "carousel-item";
    div.innerHTML = `<div>${item.icon}</div><div>${item.name}</div>`;
    container.appendChild(div);
  });
}

// Default view
showCarousel("subjects");
