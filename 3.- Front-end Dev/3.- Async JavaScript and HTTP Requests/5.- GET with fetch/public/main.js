// Information to reach API
// const url = 'https://api.datamuse.com/words?sl='; //.then syntax

const url = 'https://api.datamuse.com/words?'; //async await syntax
const queryParams = 'rel_jja=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous function

// .then syntax
// const getSuggestions = () => {
//   const wordQuery = inputField.value;
//   const endpoint = `${url}${wordQuery}`;
  
//   fetch(endpoint, {cache: 'no-cache'}).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Request failed!');
//   }, networkError => {
//     console.log(networkError.message)
//   }).then(jsonResponse => {
//     renderResponse(jsonResponse);
//   })
// }
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;

  try {
    const response = await fetch(endpoint, {cache: 'no-cache'});
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
    throw new Error('');
  } catch(error) {
    console.log(error);
  }
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
