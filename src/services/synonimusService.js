import axios from 'axios';
const baseUrl = 'https://api.datamuse.com/words?ml=';

const getSimilarWords = word =>
  axios.get(`${baseUrl}${word}`).then(({ data }) => data.slice(0, 5));

export default getSimilarWords;
