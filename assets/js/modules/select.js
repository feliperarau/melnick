export const select = () => {
  const ref = document.querySelectorAll("._select");

  const handleToggle = (toggler, target, container) => {
    const label = toggler.querySelector(".label");

    if (label !== null) {
      label.innerHTML = target.querySelector("label").innerHTML;
      container.classList.remove("active");
    }
  };

  ref.forEach(function (component) {
    const toggler = component.querySelector(".toggler");
    const selected = component.querySelector(".option.selected");
    const optionsContainer = component.querySelector(".options-container");

    const optionsList = component.querySelectorAll(".option");
    console.log(selected.length);

    if (selected !== null) {
      handleToggle(toggler, selected, optionsContainer);
    }
    toggler.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    });

    optionsList.forEach((o) => {
      o.addEventListener("click", function (e) {
        handleToggle(toggler, this, optionsContainer);
      });
    });
  });
};
select();
