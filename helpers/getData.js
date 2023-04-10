import axios from 'axios';

const getData = async (id) => {
    try {
        const userRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);;
        const user = userRes.data;

        const blogRes = await  axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        const userBlogs = blogRes.data;
        user.posts = userBlogs;

        return user;
      } catch (error) {
        console.error(error);
      }
}


export default getData;