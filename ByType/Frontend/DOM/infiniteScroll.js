/*
REQUEST
api endpoint to fetch testimonials
  params:
    limit: max num of tesets to req
    after: string ID used as cursor for pagination
          eg: testimonial has id of 55, adding after=55 to URL fetches testimonials starting after test w ID 55

//ex req:
https://api.frontendexpert.io/api/fe/testimonials?limit=2&after=55

RESPONSE
json obj
  hasNext: boolean -> false if response includes last test in db
  testimonials: array -> testimonial objects
    testimonial obj:
      message: string
      id: to be used as after query param

//ex resp: //there are more tests to fetch after id 55 because hasNext = true
{
  "hasNext": true,
  "testimonials": [
    {
      "message": "excellent",
      "id": "42"
    },
    {
      "message": "cool",
      "id": "55"
    }
  ]
}

HTML FILE
#testimonial-container div where tests will be appended
each test placed inside a paragraph element with the testimonial class

FUNCTIONALITY
fetch 5 testimonials and append to container on page load
when user scrolls to bottom of container -> fetch another 5 and append

EDDGE
only one api call at a time
once all testimonials fetched ->  no more api calls
use global fetch() method to make reqs to the api call
listen to scroll events

scrollHeight -> height of els content, included unseen overflow
scrollTop -> distance from the el's top to it's topmost visible contect
clientHeight -> viewport height

when you've scrolled all the way down -> scrollTop = scrollHeight
//plan
set clientHeight to viewport
window.onload ->
  fetch first 5 tests
    setSearchParams ->
    limit = 5
    after = if the container is empty -> no after
    if container has <p's> -> get the id val of el at bott of container -> last child el
  get response
    loop thru and create p el with id -> append each as child to container

listen to scrollEvent ->
when scroll begins -> check if scrollHeight - scrollTop - cH <= 0
if yes -> call fetch

*/
const API_BASE_URL = 'https://api.frontendexpert.io/api/fe/testimonials';
const PAGE_SIZE = 5
const testimonialContainer = document.getElementById('testimonial-container')
let afterID = null;
let canFetchTestimonials = true;
testimonialContainer.addEventListener('scroll', handleScroll);

fetchAndAppendTestimonials();

function handleScroll() {
  if(!canFetchTestimonials) return;
  const bottomSpaceLeftToScroll = (this.scrollHeight - this.scrollTop - this.clientHeight);
  if(bottomSpaceLeftToScroll > 0) return; //don't need to fetch more
  fetchAndAppendTestimonials()
}

function fetchAndAppendTestimonials() {
  canFetchTestimonials = false;
  const url = createTestimonialsUrl();
  window.fetch(url);
    .then(res => res.json());
    .then(({testimonials, hasNext}) => {
      //prevent doc for updating w every loop iteration //only
      const fragment = document.createDocumentFragment();
      testimonials.forEach({message} => {
        fragment.appendChild(createTestimonialElement(message));
      });
      testimonialContainer.appendChild(fragment);
      //save afterID to last ID that we got
      if(hasNext) afterID = testimonials[testimonials.length - 1].id;
      else testimonialContainer.removeEventListener('scroll', handleScroll);
      canFetchTestimonials = true;
    });
}

function createTestimonialElement(message) {
  const testimonialEl = document.createElement('p');
  testimonialEl.classList.add('testimonial');
  testimonialEl.textContent = message;
  return testimonialEl;
}

function createTestimonialsUrl() {
  const Url = new URL(API_BASE_URL);
  url.searchParams.set('limit', PAGE_SIZE)
  if(afterID != null) url.searchParams.set('after', afterID)
}





