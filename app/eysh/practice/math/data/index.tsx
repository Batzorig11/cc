export async function getAllTests() {
  const tests = [];
  let i = 1;

  while (true) {
    try {
      const test = await import(`./${i}.json`);
      tests.push(test.default);
      i++;
    } catch (error) {
      break;
    }
  }

  return tests;
}

export async function getTestByNumber(num: any) {
  try {
    const test = await import(`./${num}.json`);
    return test.default;
  } catch (error) {
    return null;
  }
}

export async function getTestById(id: any) {
  try {
    const test = await import(`./${id}.json`);
    return test.default;
  } catch (error) {
    return null;
  }
}
