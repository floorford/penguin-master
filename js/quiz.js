(() => {

  let q1 = document.getElementById("question1");
  let q2 = document.getElementById("question2");
  let q3 = document.getElementById("question3");
  let q4 = document.getElementById("question4");
  let q5 = document.getElementById("question5");
  let q6 = document.getElementById("question6");

  let p = document.createElement("p");

  q1.addEventListener("click", event => {
    let clicked = event.target;
    if (clicked.tagName === "INPUT" ){
      if (clicked.value === "correct" && clicked.checked) {
        p.textContent = "Correct!";
        p.style.color = "green";
        q1.appendChild(p);
      }
      else {
        p.textContent = "Wrong!";
        p.style.color = "red";
        q1.appendChild(p);
      }
    }
  });

  q2.addEventListener("click", event => {
    let clicked = event.target;
    if (clicked.tagName === "INPUT" ){
      if (clicked.value === "correct" && clicked.checked) {
        p.textContent = "Correct!";
        p.style.color = "green";
        q2.appendChild(p);
      }
      else {
        p.textContent = "Wrong!";
        p.style.color = "red";
        q2.appendChild(p);
      }
    }
  });

  q3.addEventListener("click", event => {
    let clicked = event.target;
    if (clicked.tagName === "INPUT" ){
      if (clicked.value === "correct" && clicked.checked) {
        p.textContent = "Correct!";
        p.style.color = "green";
        q3.appendChild(p);
      }
      else {
        p.textContent = "Wrong!";
        p.style.color = "red";
        q3.appendChild(p);
      }
    }
  });

  q4.addEventListener("click", event => {
    let clicked = event.target;
    if (clicked.tagName === "INPUT" ){
      if (clicked.value === "correct" && clicked.checked) {
        p.textContent = "Correct!";
        p.style.color = "green";
        q4.appendChild(p);
      }
      else {
        p.textContent = "Wrong!";
        p.style.color = "red";
        q4.appendChild(p);
      }
    }
  });

  q5.addEventListener("click", event => {
    let clicked = event.target;
    if (clicked.tagName === "INPUT" ){
      if (clicked.value === "correct" && clicked.checked) {
        p.textContent = "Correct!";
        p.style.color = "green";
        q5.appendChild(p);
      }
      else {
        p.textContent = "Wrong!";
        p.style.color = "red";
        q5.appendChild(p);
      }
    }
  });

  q6.addEventListener("click", event => {
    let clicked = event.target;
    if (clicked.tagName === "INPUT" ){
      if (clicked.value === "correct" && clicked.checked) {
        p.textContent = "Correct!";
        p.style.color = "green";
        q6.appendChild(p);
      }
      else {
        p.textContent = "Wrong!";
        p.style.color = "red";
        q6.appendChild(p);
      }
    }
  });

})();
