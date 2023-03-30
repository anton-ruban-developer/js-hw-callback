const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
  };
  
  const btn = document.querySelector("#btn");
  btn.addEventListener("mouseenter", () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
  });
  
  btn.addEventListener("click", () => {
    alert("Congrats! You did it!!!!");
  });
  
  const btn1 = document.querySelector("#btn1");
  btn1.addEventListener("mouseenter", () => {
    btn1.style.left = `${random(0, 90)}%`;
    btn1.style.top = `${random(0, 90)}%`;
  });
  
  btn1.addEventListener("click", () => {
    alert("Congrats! You did it!!!!");
  });
  
  const btn2 = document.querySelector("#btn2");
  btn2.addEventListener("mouseenter", () => {
    btn2.style.left = `${random(0, 90)}%`;
    btn2.style.top = `${random(0, 90)}%`;
  });
  
  btn2.addEventListener("click", () => {
    alert("Congrats! You did it!!!!");
  });
  
  const btn3 = document.querySelector("#btn3");
  btn3.addEventListener("mouseenter", () => {
    btn3.style.left = `${random(0, 90)}%`;
    btn3.style.top = `${random(0, 90)}%`;
  });
  
  btn3.addEventListener("click", () => {
    alert("Congrats! You did it!!!!");
  });
  
  const btn4 = document.querySelector("#btn4");
  btn4.addEventListener("mouseenter", () => {
    btn4.style.left = `${random(0, 90)}%`;
    btn4.style.top = `${random(0, 90)}%`;
  });
  
  btn4.addEventListener("click", () => {
    alert("Congrats! You did it!!!!");
  });
  