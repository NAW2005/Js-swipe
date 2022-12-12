const testimonials = [
  {
    name: "nawnaw",
    job: "Ceo",
    image:
      " https://3.bp.blogspot.com/-s8DBeT6ufDQ/W0Mn36cSdUI/AAAAAAAAFqk/-tXjmayPBecjlhmRkPE77T4o2xMRPxs7gCLcBGAs/s1600/36767347_2514412038576387_7959634513380769792_o.jpg",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi sunt repudiandae, animi minus aut, voluptatum atque illum nemo amet earum nesciunt ullam eligendi nobis neque? Nihil mollitia animi eos!",
  },
  {
    name: "Kyaw",
    job: "workshop",
    image:
      " https://3.bp.blogspot.com/-s8DBeT6ufDQ/W0Mn36cSdUI/AAAAAAAAFqk/-tXjmayPBecjlhmRkPE77T4o2xMRPxs7gCLcBGAs/s1600/36767347_2514412038576387_7959634513380769792_o.jpg",
    testimonial:
      "elit. Ipsa sequi sunt repudiandae, animi minus aut, voluptatum atque illum nemo amet earum nesciunt ullam eligendi nobis neque? Nihil mollitia animi eos!",
  },
  {
    name: "MyaMya",
    job: "shop",
    image:
      " https://3.bp.blogspot.com/-s8DBeT6ufDQ/W0Mn36cSdUI/AAAAAAAAFqk/-tXjmayPBecjlhmRkPE77T4o2xMRPxs7gCLcBGAs/s1600/36767347_2514412038576387_7959634513380769792_o.jpg",
    testimonial:
      " Ipsa sequi sunt repudiandae, animi minus aut, voluptatum atque illum nemo amet earum nesciunt ullam eligendi nobis neque? Nihil mollitia animi eos!",
  },
];

let i = 0;

let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-Container");

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>  
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
    `;
};

window.onload = displayTestimonial;
