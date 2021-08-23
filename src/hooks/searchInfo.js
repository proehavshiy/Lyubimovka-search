function searchInfo(dataArray, key) {
  if (!Array.isArray(dataArray)) {
    return;
  }

  const searchKey = key.toLowerCase();

  // поиск пьес
  const plays = dataArray.reduce((acc, current) => {
    const check = current.title.toLowerCase().includes(searchKey) ? acc.push(current) : acc;
    return acc;
  }, [])

  // поиск авторов
  const authors = dataArray.reduce((acc, current) => {
    // проверка авторов на дубли
    if (acc.find((item) => item.author_firstName === current.author_firstName || item.author_lastName === current.author_lastName)) return acc;
    const check =
      current.author_firstName.toLowerCase().includes(searchKey) ||
        current.author_lastName.toLowerCase().includes(searchKey)
        ? acc.push({
          author_firstName: current.author_firstName,
          author_lastName: current.author_lastName,
          _id: current._id,
        }) : acc;
    return acc;
  }, [])

  // упаковка авторов в группы по первым буквам фамилии
  const authorsGrouped = authors.reduce((acc, current) => {
    const group = current.author_lastName[0];
    if (!acc[group]) acc[group] = { group, children: [current], _id: current._id }
    else acc[group].children.push(current);
    return acc;
  }, {})

  //сортировка групп авторов по алфавиту
  const autorsArrSorted = Object.values(authorsGrouped).sort((a, b) => {
    if (a.group < b.group)
      return -1;
    if (a.group > b.group)
      return 1;
    return 0;
  })
  return {
    plays,
    authors: autorsArrSorted
  }
}


export default searchInfo;