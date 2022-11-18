export const mapSequential = (array, mapFunction) => {
  return array.reduce((previousValue, currentValue) => {
    return [
      ...previousValue,
      mapFunction(currentValue)
    ]
  }, []);
}

export const mapSequentialAsync = (array, mapFunction) => {
  return array.reduce(async (previousValue, currentValue, currentIndex) => {
    return [
      ...await previousValue,
      await mapFunction(currentValue, currentIndex, array)
    ]
  }, []);
}
