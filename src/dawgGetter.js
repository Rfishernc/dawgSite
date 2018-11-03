import axios from 'axios';

// const dawgPromise = () => new Promise((resolve, reject) => {
//   axios.get('https://random-dogs-api.herokuapp.com/dogs/23')
//     .done((data) => {
//       resolve(data);
//     })
//     .fail((error) => {
//       reject(error);
//     });
// });

const dawgPromise = () => axios.get('https://random-dogs-api.herokuapp.com/dogs/23');

export default { dawgPromise };
