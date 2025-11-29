const tests = [
    require("./1.json"),
];

export const getListeningTestById = async (id) => {
    return tests.find((test) => test.id === id);
};

export const getAllListeningTests = async () => {
    return tests;
};
