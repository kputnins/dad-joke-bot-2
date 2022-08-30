import { getDadJoke } from './reddit/getDatJoke';
import { postInFacebook } from './facebook/postInFacebook';

const main = async () => {
  const joke = await getDadJoke();
  console.log('\n', joke, '\n');
  await postInFacebook(joke);
};

main();
