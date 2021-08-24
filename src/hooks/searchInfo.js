function searchInfo(dataArray, key) {
  if (!Array.isArray(dataArray)) {
    return;
  }

  const searchKey = key.toLowerCase();

  // поиск пьес
  const plays = dataArray.reduce((acc, current) => {
    if (current.title.toLowerCase().includes(searchKey)) acc.push(current);
    return acc;
  }, [])

  // поиск авторов
  const authors = dataArray.reduce((acc, current) => {
    // проверка авторов на дубли
    if (acc.find((item) => item.author_firstName === current.author_firstName || item.author_lastName === current.author_lastName)) return acc;
    if (current.author_firstName.toLowerCase().includes(searchKey) || current.author_lastName.toLowerCase().includes(searchKey)) {
      acc.push({
        author_firstName: current.author_firstName,
        author_lastName: current.author_lastName,
        _id: current._id,
      })
    }
    return acc;
  }, [])

  return {
    plays: sortElements(plays),
    authors: sortElements(groupElementsByFirstLetter(authors))
  }
}

// вспомогательные функции
function groupElementsByFirstLetter(array) {
  return array.reduce((acc, current) => {
    const group = current.author_lastName[0];
    if (!acc[group]) acc[group] = { group, children: [current], _id: current._id }
    else acc[group].children.push(current);
    return acc;
  }, {})
}

function sortElements(array) {
  if (!Array.isArray(array)) {
    return Object.values(array).sort(compareStrings)
  };
  return array.sort(compareStrings);
}

function compareStrings(a, b) {
  if (a.group < b.group) return -1;
  if (a.group > b.group) return 1;
  return 0;
}

export default searchInfo;