import axios from 'axios';

export function getPosts(id) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
