window.addEventListener("load", function () {
  // Please enable return before run build ... after build -> dist  -> js -> remove this return
  // return;
  if (document.getElementById("page-loading")) {
    setTimeout(() => {
      document.getElementById("page-loading").style.display = "none";
    }, 100);
  }

  _toogleNightMode();
  //
  _handleToggleDropdown();
  //
  _handleToggletoolTip();
  //
  // _toggleModal();
  //
  _toggleHiddenClass();
  //
  // _newGlideCarousel();
  //
  _setBgColorForAvatar();
  //
  _countDownDateTime();
  //
  _myNoUiSlider();
  //
  _gridMasonryGrid();
  //
  _processChangeTab();
});

const avatarColors = [
  "#ffdd00",
  "#fbb034",
  "#ff4c4c",
  "#c1d82f",
  "#f48924",
  "#7ac143",
  "#30c39e",
  "#06BCAE",
  "#0695BC",
  "#037ef3",
  "#146eb4",
  "#8e43e7",
  "#ea1d5d",
  "#fc636b",
  "#ff6319",
  "#e01f3d",
  "#a0ac48",
  "#00d1b2",
  "#472f92",
  "#388ed1",
  "#a6192e",
  "#4a8594",
  "#7B9FAB",
  "#1393BD",
  "#5E13BD",
  "#E208A7",
];

function _gridMasonryGrid() {
  const grid = document.querySelector(".ttnc-masonry-grid");
  if (!grid) return;
  const msnry = new Masonry(grid, {
    itemSelector: ".ttnc-masonry-grid__item",
    columnWidth: ".ttnc-masonry-grid__sizer",
    percentPosition: true,
  });
}

function _toogleNightMode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const switchs = [...document.querySelectorAll("[data-switch-night-mode]")];
  const toDark = () => {
    document.querySelector("#root").classList.add("dark");
    localStorage.theme = "dark";
  };
  const toLight = () => {
    document.querySelector("#root").classList.remove("dark");
    localStorage.theme = "light";
  };

  //   Check nightMode from localStore
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    toDark();
  } else {
    toLight();
  }

  //   toogle nightMode from swicthNightMode
  switchs.forEach((element) => {
    element.addEventListener("click", function () {
      if (!document.querySelector("#root").classList.contains("dark")) {
        toDark();
      } else {
        toLight();
      }
    });
  });
}

function _toggleHiddenClass() {
  const btnToggle = [...document.querySelectorAll(`[data-ttnc-hidden-toggle]`)];
  if (!btnToggle || !btnToggle.length) return;
  btnToggle.forEach((element) => {
    element.addEventListener("click", function (event) {
      const panelHiddenId = element.getAttribute("data-ttnc-hidden-toggle");
      !!panelHiddenId && event.preventDefault();
      if (!panelHiddenId) return;
      const panelElement = document.getElementById(panelHiddenId);
      if (!panelElement) return;
      panelElement.classList.toggle("hidden");
      panelElement.classList.toggle("block");
    });
  });
}

function _toggleModal() {
  const btnToggle = [...document.querySelectorAll(`[data-ttnc-modal-toggle]`)];
  if (!btnToggle || !btnToggle.length) return;
  btnToggle.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      const modalID = element.getAttribute("data-ttnc-modal-toggle");
      if (!modalID) return;
      const a = document.getElementById(modalID);
      const b = document.getElementById(modalID + "-backdrop");
      if (!a || !b) return;

      // === Xu ly neu modal nam trong glide__slides (bi transform nen se ko hoat dong)
      let i = 0;
      let parent = a.parentElement;
      while (parent && !parent.classList.contains("glide__slides") && i < 8) {
        i++;
        parent = parent.parentElement;
      }
      if (parent && parent.classList.contains("glide__slides")) {
        if (a.classList.contains("hidden")) {
          parent.classList.add("ttnc-transform-none");
        } else {
          parent.classList.remove("ttnc-transform-none");
        }
      }
      //

      a.classList.toggle("hidden");
      b.classList.toggle("hidden");
      a.classList.toggle("flex");
      b.classList.toggle("flex");

      if (a.getAttribute("data-ttnc-modal-toggle-class-in-from")) {
        const classFrom = a.getAttribute(
          "data-ttnc-modal-toggle-class-in-from"
        );
        const classTo = a.getAttribute("data-ttnc-modal-toggle-class-in-to");
        if (!a.classList.contains("hidden")) {
          setTimeout(() => {
            a.className = a.className.replace(classFrom, classTo);
          }, 50);
        } else {
          a.className = a.className.replace(classTo, classFrom);
        }
      }
    });
  });
}

function _handleToggleDropdown() {
  const btns = [...document.querySelectorAll(".ttnc-dropdown__btn")];
  const dropdowns = [...document.querySelectorAll(".ttnc-dropdown__panel")];
  if (!btns || !btns.length) return;
  btns.forEach((element, key, parent) => {
    const panel = element.nextElementSibling;
    const panelClass = panel.classList;
    if (!panel) return;
    element.addEventListener("click", (event) => {
      event.preventDefault();

      // Hidden all dropdown open
      if (!panelClass.contains("hidden")) {
        dropdowns.map((dropd) => {
          if (!dropd.classList.contains("hidden")) {
            !dropd.classList.add("hidden");
          }
        });
      } else {
        dropdowns.map((dropd) => {
          if (!dropd.classList.contains("hidden")) {
            !dropd.classList.add("hidden");
          }
        });
        const placement = panel.getAttribute("data-popper-placement");
        var popper = new Popper(element, panel, {
          placement: placement || "bottom-start",
        });
        panelClass.toggle("hidden");
      }

      panelClass.toggle("block");
    });
  });
}

function _handleToggletoolTip() {
  const btns = [...document.querySelectorAll(".ttnc-toolTip__btn")];
  const toolTips = [...document.querySelectorAll(".ttnc-toolTip__panel")];
  if (!btns || !btns.length) return;
  btns.forEach((element, key, parent) => {
    const panel = element.nextElementSibling;
    const panelClass = panel.classList;
    if (!panel) return;
    element.addEventListener("mouseenter", (event) => {
      event && event.preventDefault();
      const placement = panel.getAttribute("data-popper-placement");
      var popper = new Popper(element, panel, {
        placement: placement || "bottom-start",
      });
      panelClass.toggle("hidden");
      panelClass.toggle("block");
    });
    element.addEventListener("mouseleave", (event) => {
      event && event.preventDefault();
      const placement = panel.getAttribute("data-popper-placement");
      var popper = new Popper(element, panel, {
        placement: placement || "bottom-start",
      });
      panelClass.toggle("hidden");
      panelClass.toggle("block");
    });
  });
}

function _newGlideCarousel() {
  const _intantSlidePeek = (element) => {
    const glide = new Glide(element, {
      type: "carousel",
      // autoplay: true,
      hoverpause: true,
      gap: 40,
      perView: 3,
      peek: { before: 300, after: 150 },
      breakpoints: {
        1400: {
          perView: 2,
          peek: { before: 100, after: 50 },
          gap: 10,
        },
        800: {
          perView: 1,
          peek: 40,
          gap: 10,
        },
      },
    });
    glide.mount();
  };
  const _intantSlide = (element) => {
    const gap = Number(element.getAttribute("ttnc-data-glide-gap")) || 0;
    const perView =
      Number(element.getAttribute("ttnc-data-glide-item-per-row")) || 4;
    const perView1100 =
      Number(element.getAttribute("ttnc-data-glide-item-per-row-1100")) || 3;
    const perView800 =
      Number(element.getAttribute("ttnc-data-glide-item-per-row-800")) || 2;

    const glide = new Glide(element, {
      rewind: true,
      bound: true,
      gap,
      perView,
      breakpoints: {
        1100: {
          perView: perView1100,
          gap: 20,
        },
        800: {
          perView: perView800,
          gap: 16,
        },
      },
    });

    glide.mount();
  };
  const _intantSlideForProductImageSlide = (element) => {
    const glide = new Glide(element, {
      gap: 16,
      perView: 1,
    });
    glide.mount();
    document.querySelectorAll(".ttnc-open-quickViewModalId").forEach((item) => {
      setTimeout(() => {
        item.addEventListener("click", function () {
          glide.update();
        });
      }, 10);
    });
  };
  const _intantSlideFade = (element) => {
    const glide = new Glide(element, {
      animationDuration: 1,
      rewindDuration: 1,
      throttle: 1,
      rewind: true,
      gap: 0,
    });
    glide.mount();
  };

  const slidersForProductImg = [
    ...document.querySelectorAll(".glide-for-product-content"),
  ];
  const sliders = [...document.querySelectorAll(".glide")];
  const sliderFades = [...document.querySelectorAll(".glide-fade")];
  const sliderPeeks = [...document.querySelectorAll(".glide-peek")];
  slidersForProductImg.forEach(_intantSlideForProductImageSlide);
  sliders.forEach(_intantSlide);
  sliderFades.forEach(_intantSlideFade);
  sliderPeeks.forEach(_intantSlidePeek);
}

function _setBgColorForAvatar() {
  const avatars = document.querySelectorAll(".wil-avatar-no-img");
  if (!avatars || !avatars.length) return;
  avatars.forEach((element, key, parent) => {
    const text = element.innerText;
    const backgroundIndex = Math.floor(
      text.charCodeAt(0) % avatarColors.length
    );
    const backgroundColor = avatarColors[backgroundIndex];
    //
    element.style.backgroundColor = backgroundColor;
  });
}

function myToolTipPopperJs() {
  const popcorns = [...document.querySelectorAll(".popcorn")];
  const tooltips = [...document.querySelectorAll(".tooltip")];

  popcorns.map((value) => {
    createPopper(popcorn, tooltip, {
      placement: "top",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  });
}

function _countDownDateTime() {
  const area = document.getElementById("ttnc-countDownDateTime");
  if (!area) return;

  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = 20;
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"

    document.querySelector(".ttnc-countDownDateTime__days").innerHTML = days;
    document.querySelector(".ttnc-countDownDateTime__hours").innerHTML = hours;
    document.querySelector(".ttnc-countDownDateTime__mins").innerHTML = minutes;
    document.querySelector(".ttnc-countDownDateTime__secs").innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);
}

function _myNoUiSlider() {
  const slider = document.getElementById("priceSliderRange");
  if (!slider) return;
  noUiSlider.create(slider, {
    start: [0, 280],
    connect: true,
    range: {
      min: 0,
      max: 400,
    },
    format: wNumb({
      decimals: 0,
    }),
  });

  const valuesDivs = [
    document.getElementById("priceSliderRange-value1"),
    document.getElementById("priceSliderRange-value2"),
  ];

  // When the slider value changes, update the input and span
  slider.noUiSlider.on("update", function (values, handle) {
    valuesDivs[handle].innerHTML = values[handle];
  });
}

function _processChangeTab() {
  const btns = [...document.querySelectorAll("[data-ttnc-tab]")];
  if (!btns.length) return;

  btns.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const tabID = item.getAttribute("data-ttnc-tab");
      _changeAtiveTab(event, tabID);
    });
  });
}

function _changeAtiveTab(event, tabID) {
  let element = event.target;
  while (element.nodeName !== "A") {
    element = element.parentNode;
  }
  ulElement = element.parentNode.parentNode;
  aElements = ulElement.querySelectorAll("li > a");
  tabContents = document
    .getElementById("tabs-id")
    .querySelectorAll(".tab-content > div");
  for (let i = 0; i < aElements.length; i++) {
    aElements[i].classList.remove("underline");

    tabContents[i].classList.add("hidden");
    tabContents[i].classList.remove("block");
  }

  element.classList.add("underline");

  document.getElementById(tabID).classList.remove("hidden");
  document.getElementById(tabID).classList.add("block");
}
