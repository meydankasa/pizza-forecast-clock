
export const getBugsNumber = () => {
  return fetch('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=99')
    .then(response => {
      return response.json()
    })
    
    .catch((error) => {
      console.error('Error:', error);
    });
}