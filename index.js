function changeThemes() {
    const heading = document.getElementById("my-heading");
  
   
    if (heading.classList.contains("style-one")) {
      heading.classList.replace("style-one", "style-two");
    } else {
      heading.classList.replace("style-two", "style-one");
    }
  }