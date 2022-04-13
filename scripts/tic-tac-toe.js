const createPlayer = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;
  return { getName, getMarker };
};

const gameboard = (() => {
  const gameboardArray = new Array(9).fill(undefined);

  const setField = (index, marker) => {
    gameboardArray[index] = marker;
  };

  const checkField = (index) => gameboardArray[index];

  return {
    setField,
    checkField,
  };
})();
