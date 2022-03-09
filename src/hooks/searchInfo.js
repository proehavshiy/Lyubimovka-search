function searchInfo(dataArray, key) {
  if (!Array.isArray(dataArray)) {
    return;
  }

  const searchKey = key ? key.toLowerCase() : null;

  // поиск пьес
  const plays = dataArray.reduce((acc, current) => {
    if (current.title.toLowerCase().includes(searchKey)) acc.push(current);
    return acc;
  }, [])

  // поиск авторов
  const countedAuthors = {}

  const authors = dataArray.reduce((acc, current) => {
    const author = `${current.author_firstName} ${current.author_lastName}`.toLowerCase();

    // избавляемся от дубликатов в авторах
    if (countedAuthors[author]) return acc
    if (!countedAuthors[author]) countedAuthors[author] = 1

    // добавляем подходящих под запрос авторов без дублей
    if (author.includes(searchKey)) {
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