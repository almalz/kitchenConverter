export const getAllScalesFromUnitList = (unitList) => {
  const scaleList = unitList
    .map((unit) => unit.scale)
    .filter((scale, index, scaleList) => scaleList.indexOf(scale) === index)
  return scaleList
}
