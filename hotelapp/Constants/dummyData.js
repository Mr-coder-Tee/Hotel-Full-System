const hotelGalary = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1585418694458-dc80a5c20294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1586798271654-0471bb1b0517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBzaG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBraXRjaGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1572177215152-32f247303126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  }
];

const rev = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    comment: "The same good versus evil paradigm applies to performance review templates. We want to make sure you're using employee reviews for good—so we did the heavy lifting and created impactful performance review templates for you!",
    stars: 4.1,
    username:'Lebo Sebola'
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    comment: "Before you put any of these templates into action, make sure you’ve been trained on the best ways to use the templates in your tool belt.In an annual performance review, managers and employees should summarize performance across the year. It's also a good opportunity to find out what goals employees would like to prioritize and to look toward the future. With these things in mind, nearly any performance review template will work.",
    stars: 2.9,
    username:'Lerato Maluleka'
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    comment: "f monthly performance conversations aren't feasible, we recommend having them at least quarterly. This worksheet will guide you through topics of discussion for quarterly performance conversations.",
    stars: 1,
    username:'Geoge Queens'
  },
  {
    id: 4,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    comment: "It's important for managers and employees to talk openly about an employee's compensation. Use this template to track an employee's understanding of compensation, benefits, bonuses, and pay.",
    stars: 4.5,
    username:'James Freak'
  },
  {
    id: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    comment: "This quarterly performance review example has sections for both achievements and areas of improvement. It also has a section for core values, as this must be a key performance indicator at this company. Different companies will have different measuring sticks for success.",
    stars: 5,
    username:'Nail Normae'
  },
  {
    id: 6,
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    comment: "The frequency and depth of the review process may vary by company based on company size and goals of the evaluations.",
    stars: 3,
    username:'Peter Loke'
  }
];

const facilities = [
  { id: 1, iconname: "wifi", icontype: "font-awesome" },
  { id: 2, iconname: "cutlery", icontype: "font-awesome" },
  { id: 3, iconname: "television", icontype: "font-awesome" },
  { id: 4, iconname: "pool", icontype: "material" },
  { id: 5, iconname: "fastfood", icontype: "material" },
  { id: 6, iconname: "fitness-center", icontype: "material" },
  { id: 7, iconname: "local-laundry-service", icontype: "material" },
  { id: 8, iconname: "shower", icontype: "font-awesome" },
  { id: 9, iconname: "bathtub", icontype: "material" },
  { id: 10, iconname: "ac-unit", icontype: "material" },
  { id: 11, iconname: "local-parking", icontype: "material" },
  { id: 12, iconname: "bathtub", icontype: "material" }
];

const hotels = [
  {
    id: 1,
    hotelname: "Hotel Bliss.",
    address: "polokwane",
    rooms: "2",
    beds: "2",
    latitude: -26.358055,
    longitude: 27.398056,
    descrip:
      "Offering hotel guests superior services and a broad range of amenities, Protea Hotel Landmark is committed to ensuring that your stay is as comfortable as possible. Top features of the hotel include free Wi-Fi in all rooms, 24-hour security, daily housekeeping, postal service, taxi service.",
    rating: 3,
    outSidePhoto:
      "https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    reviews: rev,
    galary: hotelGalary,
    facilities: facilities,
    price: "R600"
  },
  {
    id: 2,
    hotelname: "Crowne Plaza.",
    address: "tzaneen",
    rooms: "1",
    beds: "1",
    latitude: -29.1,
    longitude: 26.2167,
    descrip:
      "Offering hotel guests superior services and a broad range of amenities, Protea Hotel Landmark is committed to ensuring that your stay is as comfortable as possible. Top features of the hotel include free Wi-Fi in all rooms, 24-hour security, daily housekeeping, postal service, taxi service.",
    rating: 3.5,
    outSidePhoto:
      "https://images.unsplash.com/photo-1567636788276-40a47795ba4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    reviews: rev,
    galary: hotelGalary,
    facilities: facilities,
    price: "R500"
  },
  {
    id: 3,
    hotelname: "Emerald Bay Inn.",
    address: "kzn",
    rooms: "4",
    beds: "3",
    latitude: -29.883333,
    longitude: 31.049999,
    descrip:
      "Offering hotel guests superior services and a broad range of amenities, Protea Hotel Landmark is committed to ensuring that your stay is as comfortable as possible. Top features of the hotel include free Wi-Fi in all rooms, 24-hour security, daily housekeeping, postal service, taxi service.",
    rating: 4.3,
    outSidePhoto:
      "https://images.unsplash.com/photo-1554647286-f365d7defc2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    reviews: rev,
    galary: hotelGalary,
    facilities: facilities,
    price: "R1100"
  },
  {
    id: 4,
    hotelname: "University Inn.",
    address: "cape town",
    rooms: "1",
    beds: "2",
    latitude: -26.266111,
    longitude: 27.865833,
    descrip:
      "Offering hotel guests superior services and a broad range of amenities, Protea Hotel Landmark is committed to ensuring that your stay is as comfortable as possible. Top features of the hotel include free Wi-Fi in all rooms, 24-hour security, daily housekeeping, postal service, taxi service.",
    rating: 4.8,
    outSidePhoto:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    reviews: rev,
    galary: hotelGalary,
    facilities: facilities,
    price: "R2000"
  },
  {
    id: 5,
    hotelname: "The New View.",
    address: "polokwane",
    rooms: "2",
    beds: "3",
    latitude: -29.087217,
    longitude: 26.154898,
    descrip:
      "Offering hotel guests superior services and a broad range of amenities, Protea Hotel Landmark is committed to ensuring that your stay is as comfortable as possible. Top features of the hotel include free Wi-Fi in all rooms, 24-hour security, daily housekeeping, postal service, taxi service.",
    rating: 2.3,
    outSidePhoto:
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    reviews: rev,
    galary: hotelGalary,
    facilities: facilities,
    price: "R600"
  },
  {
    id: 6,
    hotelname: "Ramada Limited & Suites.",
    address: "north landon",
    rooms: "4",
    beds: "4",
    latitude: -33.958252,
    longitude: 25.619022,
    descrip:
      "Offering hotel guests superior services and a broad range of amenities, Protea Hotel Landmark is committed to ensuring that your stay is as comfortable as possible. Top features of the hotel include free Wi-Fi in all rooms, 24-hour security, daily housekeeping, postal service, taxi service.",
    rating: 4.9,
    outSidePhoto:
      "https://images.unsplash.com/photo-1554009975-d74653b879f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    reviews: rev,
    galary: hotelGalary,
    facilities: facilities,
    price: "R1000"
  },
  {
    id: 7,
    hotelname: "Sunset Lodge.",
    address: "Patersburg",
    rooms: "1",
    beds: "2",
    latitude: -26.563404,
    longitude: 27.844164,
    descrip:
      "Offering hotel guests superior services and a broad range of amenities, Protea Hotel Landmark is committed to ensuring that your stay is as comfortable as possible. Top features of the hotel include free Wi-Fi in all rooms, 24-hour security, daily housekeeping, postal service, taxi service.",
    rating: 4.1,
    outSidePhoto:
      "https://images.unsplash.com/photo-1619634727222-3318c5e9ebd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    reviews: rev,
    galary: hotelGalary,
    facilities: facilities,
    price: "R900"
  },
  {
    id: 8,
    hotelname: "Hotel Elite.",
    address: "polokwane",
    rooms: "2",
    beds: "2",
    latitude: -33.977074,
    longitude: 22.457581,
    descrip:
      "Offering hotel guests superior services and a broad range of amenities, Protea Hotel Landmark is committed to ensuring that your stay is as comfortable as possible. Top features of the hotel include free Wi-Fi in all rooms, 24-hour security, daily housekeeping, postal service, taxi service.",
    rating: 2.9,
    outSidePhoto:
      "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    reviews: rev,
    galary: hotelGalary,
    facilities: facilities,
    price: "R400"
  },
  {
    id: 9,
    hotelname: "Four Seasons",
    address: "North west",
    rooms: "2",
    beds: "1",
    latitude: -26.120134,
    longitude: 27.901464,
    descrip:
      "Offering hotel guests superior services and a broad range of amenities, Protea Hotel Landmark is committed to ensuring that your stay is as comfortable as possible. Top features of the hotel include free Wi-Fi in all rooms, 24-hour security, daily housekeeping, postal service, taxi service.",
    rating: 3.7,
    outSidePhoto:
      "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    reviews: rev,
    galary: hotelGalary,
    facilities: facilities,
    price: "R800"
  },
  {
    id: 10,
    hotelname: "Budget Suites",
    address: "western cape",
    rooms: "5",
    beds: "3",
    latitude: -25.872782,
    longitude: 29.255323,
    descrip:
      "Offering hotel guests superior services and a broad range of amenities, Protea Hotel Landmark is committed to ensuring that your stay is as comfortable as possible. Top features of the hotel include free Wi-Fi in all rooms, 24-hour security, daily housekeeping, postal service, taxi service.",
    rating: 3.9,
    outSidePhoto:
      "https://images.unsplash.com/photo-1504652517000-ae1068478c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    reviews: rev,
    galary: hotelGalary,
    facilities: facilities,
    price: "R780"
  }
];

const user = {
  uri: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
};

export default {
  hotelGalary,
  rev,
  facilities,
  user,
  hotels
};
