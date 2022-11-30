const myModal = new bootstrap.Modal("#exampleModal", {
  keyboard: false,
});

function showModal(idx) {
  const data = [
    {
      name: "Ace Hotel New Orleans",
      desc: "A stone’s throw from the French Quarter, in the soul of the Deep South. ",
      img: "imgs/sponsers/acehotel.png",
      link: "https://acehotel.com",
      href: "https://acehotel.com",
    },
    {
      name: "Haunted Museum",
      desc: "Join us for a spirited adventure through Zak Bagans’ The Haunted Museum in Las Vegas, as seen on the Travel Channel’s Ghost Adventures! See original collectibles from haunted sites and hear the bone-chilling stories of the paranormal activity that surrounds them. This isn’t your average haunted house in Las Vegas; this is the go-to destination for paranormal enthusiasts and ghost hunters wanting to see pieces from the “Demon House,” Dr. Kevorkian’s death van, and even the Dybbuk Box. Come take a tour of the Haunted Museum!",
      img: "imgs/sponsers/haunted-museum-logo.avif",
      link: "https://thehauntedmuseum.com/",
      href: "https://thehauntedmuseum.com/",
    },
    {
      name: "Museum of Death",
      desc: "The museum displays a wide variety of art and artifacts surrounding the subject of death. Baby coffins are in one section, letters and artwork from various serial killers in another. There are films regarding autopsies as well as explicit photographs of crime victim.",
      img: "imgs/sponsers/voco-stjames-landscape-rgb-yellow-mono-01.jpg",
      link: "http://www.museumofdeath.net/",
      href: "http://www.museumofdeath.net/",
    },
    {
      name: "Louisiana Children's Museum",
      desc: "Embrace creativity at the Museum. Visit us for a day of play with your family",
      img: "imgs/sponsers/lcm.png",
      link: "https://lcm.org/",
      href: "https://lcm.org/",
    },
    {
      name: "Walk-On's Bistreaux and Bar",
      desc: "Grab a bite with your family at Walk On's Restaurant and Sports Bistreaux. ",
      img: "imgs/sponsers/walkons.png",
      link: "https://walk-ons.com/",
      href: "https://walk-ons.com/",
    },
    {
      name: "Premium Parking - P402",
      desc: "Reserve online or drive up",
      img: "imgs/sponsers/premuimparking.png",
      link: "https://www.premiumparking.com/P402",
      href: "https://www.premiumparking.com/P402",
    },
    {
      name: "Sheraton New Orleans Hotel",
      desc: "Sheraton New Orleans Hotel offers two restaurants and a bar, a 24-hour fitness center.",
      img: "imgs/sponsers/sheraton.png",
      link: "Website: Sheraton New Orleans Hotel",
      href: "https://www.neworleans.com/listing/sheraton-new-orleans-hotel/767/",
    },
    {
      name: "The Ritz-Carlton, New Orleans",
      desc: "The Ritz-Carlton, New Orleans in the French Quarter offers luxury hotel amenities including a spa, large rooms and a lounge with live jazz.",
      img: "imgs/sponsers/theritzcarlton.png",
      link: "https://www.ritzcarlton.com/en/hotels/new-orleans",
      href: "https://www.ritzcarlton.com/en/hotels/new-orleans",
    },
  ];
  console.log(data[idx].name);

  $("#exampleModalLabel")[0].innerText = data[idx].name;
  $("#exampleModalImg")[0].setAttribute("src", data[idx].img);
  $("#exampleModalDesc")[0].innerText = data[idx].desc;
  $("#exampleModalLink")[0].innerText = data[idx].link;
  $("#exampleModalLink")[0].setAttribute("href", data[idx].href);

  myModal.show();
}
