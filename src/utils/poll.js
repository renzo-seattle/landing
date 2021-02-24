function doneFcn(results) {
  return results && results.status && results.status === 200;
}

// TODO - pass in custom done fcn
const poll = async (fcn, interval) => {
  let results = null;
  do {
    results = await fcn();
    if (doneFcn(results)) {
      return results;
    }

    await new Promise((resolve) => setTimeout(resolve, interval));
  } while (!results || !doneFcn(results));
};

export default poll;
