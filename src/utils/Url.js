class Url {
  
  static getApiAddress(route, params = false) {
    params = !params ? '' : `&${params}`;
    return `${process.env.API_URL}/${route}?api_key=${process.env.API_KEY}&language=pt-BR${params}`;
  }

  static getImageApiAddress(posterPath) {
    return `${process.env.API_IMAGE_URL}/${posterPath}`;
  }
}

module.exports = Url;
