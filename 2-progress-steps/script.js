const STEP_NUM = 4;

const stepsContainer = document.querySelector(".steps-container");
const progressLine = document.querySelector(".progress");
const btnsContainer = document.querySelector(".btns-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// insert steps to dom
for (let i = 1; i <= STEP_NUM; i++) {
  stepsContainer.insertAdjacentHTML("beforeend", `<li class="step">${i}</li>`);
}

const steps = document.querySelectorAll(".step");
// initialize active step
steps[0].classList.add("active");

let currentStep = 0;

const disableBtn = function (btn) {
  btn.classList.remove("active");
  btn.disabled = true;
};

const updateBtns = function (currentStep) {
  // initialize buttons
  prevBtn.classList.add("active");
  nextBtn.classList.add("active");

  prevBtn.disabled = false;
  nextBtn.disabled = false;

  // update buttons
  if (currentStep === 0) {
    disableBtn(prevBtn);
    return;
  }

  if (currentStep === STEP_NUM - 1) {
    disableBtn(nextBtn);
    return;
  }
};

const updateSteps = function (steps) {
  steps.forEach((step, i) =>
    i > currentStep
      ? step.classList.remove("active")
      : step.classList.add("active")
  );
};

const update = function (e) {
  // calculate next step
  s =
    e.target.textContent === "Prev"
      ? -1
      : e.target.textContent === "Next"
      ? 1
      : 0;

  currentStep += s;

  // update
  updateBtns(currentStep);
  updateSteps(steps);
  progressLine.style.width = `${(currentStep * 100) / (STEP_NUM - 1)}%`;
};

btnsContainer.addEventListener("click", update);
