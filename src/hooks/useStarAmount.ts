import { IStar } from "../metadata/interfaces";

const useStarAmount = (amount : number) => {
  const stars : IStar[] = [],
    starMax = 5,
    amountRounded = Math.floor(amount);
  
  for(let i = 0; i < amountRounded; i++) {
    stars.push({ name : 'star' });
  }

  for(let i = 0; i < (starMax - amountRounded); i++){
    stars.push({ name : 'staro' });
  }

  return stars;
}

export default useStarAmount;