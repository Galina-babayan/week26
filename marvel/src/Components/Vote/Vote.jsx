function Vote(){
    return(
        
    )
}


starsNode.addEventListener("click", (event) => {
    if (event.target.classList.contains("marvel__total")) {
      const form = event.target.parentNode.parentNode;

      const inputs = form.querySelectorAll(".marvel__total");
      const icons = form.querySelectorAll(".marvel__icon");
      icons.forEach((elem) => {
        elem.style = "fill: rgb(134, 180, 197)";
      });

      for (let i = 0; i < inputs.length; i++) {
        icons[i].style = "fill: rgb(197, 166, 134)";

        if (inputs[i].checked) {
          break;
        }
      }

      buttonNode.addEventListener("click", function () {
        let vote = event.target.value;

        let name = `${hero.Name}`;
        markNode.textContent = `Ваша оценка:  ${vote}`;

        let result = `${name}: ${vote}`;
        storeResult.push(result);

        localStorage.setItem("result", JSON.stringify(storeResult));

        inputVoteNode.value = "";
      });
    }
  });