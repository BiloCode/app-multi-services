const useCoords = (json : string) => {
  const coords = JSON.parse(json);
  
  return {
    longitude : coords.longitude || -12.0464,
    latitude : coords.latitude || -77.0428
  }
}

export default useCoords;