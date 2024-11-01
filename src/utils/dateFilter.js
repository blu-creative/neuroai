export function fromTo() {
  const nowTime = new Date().toISOString();
  return `filters[$and][0][$or][0][from][$lte]=${nowTime}&filters[$and][0][$or][1][from][$null]=true&filters[$and][1][$or][0][to][$gte]=${nowTime}&filters[$and][1][$or][1][to][$null]=true`;
}
