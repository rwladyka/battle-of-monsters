const isOutOfRange = (dice: number) => dice <=0 || dice > 6

export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {
  if(isOutOfRange(dice1) || isOutOfRange(dice2) || isOutOfRange(dice3)) throw new Error("Dice out of number range")

  if(dice1 === dice2 && dice2 === dice3) {
    return dice1 * 3;
  }

  if(dice1 === dice2 || dice1 === dice3) {
    return dice1 * 2
  } else if (dice2 === dice3) {
    return dice2 * 2;
  }

  return Math.max(dice1, dice2, dice3);
};
