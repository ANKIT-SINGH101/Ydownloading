const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apikey: "19f84e11932abbc79e6d83f82d6d1045",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
