import { getDadJoke } from './reddit/getDatJoke';
import { sendJokeToMessengerGroup } from './facebook/sendJokeToMessengerGroup';

const main = async () => {
  const joke = await getDadJoke();
  console.log(joke);
  await sendJokeToMessengerGroup(joke);
};

main();
