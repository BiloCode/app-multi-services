interface IStar {
  name : 'staro' | 'star';
}

const useStarAmount = (amount : number) => {
  const starMax = 5;
  let stars : IStar[] = [];
  
  for(let i = 0; i < amount; i++) {
    stars.push({ name : 'star' });
  }

  for(let i = 0; i < (starMax - amount); i++){
    stars.push({ name : 'staro' });
  }

  return stars;
}

export default useStarAmount;