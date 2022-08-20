interface GenerateRandomIntegerParams {
  min?: number;
  max: number;
}

export const generateRandomInteger = ({
  min = 0,
  max,
}: GenerateRandomIntegerParams) => {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);
  return Math.floor(Math.random() * (maxRounded - minRounded + 1) + minRounded);
};
