function keyCodeCheck() {
  // console.log(window.event)

  if (window.event.keyCode === 13) {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    newLi.appendChild(newBtn); // li안에 button 담기
    newLi.appendChild(newSpan); // li안에 span 담기
    console.log(newLi);
  }
}
