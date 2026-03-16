export function sorter(body, str) {
  const { sortBy = "publishedAt", sortType = "desc" } = body;
  return `${str}&sort=${sortBy}:${sortType}`;
}

export function fromTo(body, str) {
  if (!body) {
    return str;
  }
  const { withoutDate } = body;

  if (withoutDate === true) {
    return str;
  }
  const nowTime = new Date().toISOString();
  return `${str}&filters[$and][0][$or][0][from][$lte]=${nowTime}&filters[$and][0][$or][1][from][$null]=true&filters[$and][1][$or][0][to][$gte]=${nowTime}&filters[$and][1][$or][1][to][$null]=true`;
}

export function pagination(body, str) {
  const { page, size } = body;
  let pageNum = page,
    sizeNum = size;

  if (!page || !Number.isInteger(page) || page < 1) {
    pageNum = 1;
  }

  if (!size || !Number.isInteger(size) || size < 1) {
    sizeNum = 25;
  }

  return `${str}&pagination[page]=${pageNum}&pagination[pageSize]=${sizeNum}`;
}

export function populateAll(body, str) {
  const { populate = ["cover"] } = body;

  if (!populate || !populate.length) {
    return str;
  }

  let url = "";

  populate.forEach((element, index) => {
    url += `&populate[${index}]=${element}`;
  });

  return `${str}${url}`;
}

export function localization(body, str) {
  const { locale, filter } = body;
  str += "?locale=";
  if (locale === "fr") {
    str += "fr-CA";
  } else {
    str += "en";
  }
  if (filter) {
    str += `&${filter}`;
  }
  return str;
}

export function base(body) {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const { content = "articles", id } = body;
  let withId = "";
  if (id) {
    withId = `/${id}`;
  }
  return `${baseUrl}/api/${content}${withId}`;
}

export function urlBuilder(body) {
  const { id } = body;
  let url = base(body);
  url = localization(body, url);
  url = populateAll(body, url);
  if (id) {
    return url;
  }
  url = pagination(body, url);
  url = fromTo(body, url);
  url = sorter(body, url);
  return url;
}
