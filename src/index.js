const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

//logo 
const logoImg = document.getElementById('logo-img');
logoImg.src= siteContent["images"]["logo-img"];

//nav
const navLinks = document.querySelectorAll('nav a');
const linkTexts = Object.values(siteContent.nav); // making an array
navLinks.forEach((link, index) => link.textContent = linkTexts[index]); // running function for each item in the array takes two arguments (value, location within the array) 

// simple for loop solution:

// for (let i = 0; i < navLinks.length; i++){
//   const linkElement = navLinks[i]
//   const linkTextValue = linkTexts[i]

//   linkElement.textContent = linkTextValue
// }

//section cta
const ctaImg = document.getElementById('cta-img')
const headerChange = document.querySelector('.cta-text h1')
const buttonChange = document.querySelector('.cta-text button')

ctaImg.src= siteContent["images"]["cta-img"]
headerChange.innerHTML = siteContent['cta']['h1'];
buttonChange.innerHTML = siteContent['cta']['button'];


//Middle Image
const middleImg = document.getElementById('middle-img')
middleImg.src= siteContent["images"]["accent-img"];

//Main Text Content 
const mainContent = siteContent["main-content"]
const mainContentKeys = Object.keys(mainContent)

const h4TextElements = document.querySelectorAll(".text-content h4")
const pTextElements = document.querySelectorAll(".text-content p")

// approach 1:
// for (let i = 0; i < mainContentKeys.length-1; i+=2){
//     let h4key = mainContentKeys[i] // gets key for h4 object
//     let contentKey = mainContentKeys[i+1] // get key for p content objects
  
//     let h4Val = mainContent[h4key] // gets h4 content
//     let contentVal = mainContent[contentKey] // gets p content
  
//     h4TextElements[i/2].textContent = h4Val
//     pTextElements[i/2].textContent = contentVal
//   }

// approach 2
// var j = 0
// h4TextElements.forEach((h4ele, index) => {
//   h4ele.textContent = mainContent[mainContentKeys[j]]
//   pTextElements[index].textContent = mainContent[mainContentKeys[j+1]]
//   j += 2
// })

//approach 3
let content = []
for (let i = 0; i < mainContentKeys.length-1; i+=2){

  let h4key = mainContentKeys[i] // gets key for h4 object
  let contentKey = mainContentKeys[i+1] // get key for p content objects

  let h4Val = mainContent[h4key] // gets h4 content
  let contentVal = mainContent[contentKey] // gets p content

  content.push({
    h4: h4Val,
    content: contentVal,
  })
}

content.forEach(({h4, content}, index) => {
  h4TextElements[index].textContent = h4
  pTextElements[index].textContent = content
})


//Contact Section
const h4About = document.querySelector('.contact h4')
h4About.textContent= siteContent["contact"]["contact-h4"];

const pContact = document.querySelectorAll('.contact p');
const pTexts = Object.values(siteContent.contact); 

pContact.forEach((pContent, index) => pContent.textContent = pTexts[index+1]); 

// simple for loop solution:
// for (let i = 0; i < pContact.length; i++){
//   const pContent = pContact[i]
//   const contactText = pTexts[i]

//   pContent.textContent = contactText
// }

//footer
const footerContent = document.querySelector('footer a')
footerContent.textContent = siteContent["footer"]["copyright"];

console.log('project wired!')
