async function pizza() {
  try {
    const likePizza = false;

    if (likePizza) {
      console.log('피자를 주문했습니다.');
    } else {
      console.log('피자를 주문하지 않습니다.');
    }
  } catch (err) {
    console.error(err);
  }
}

pizza();
