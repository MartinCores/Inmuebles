const getInmuebles = async () => {
  const response = await fetch(
    "https://hub-inmobiliaria.netlify.app/inmuebles.json"
  );
  const json = await response.json();
  return json;
};

export default getInmuebles;
