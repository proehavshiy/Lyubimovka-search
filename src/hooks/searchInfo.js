function searchInfo(dataArray, key) {
  if (!Array.isArray(dataArray)) {
    return;
  }
  const searchKey = key.toLowerCase();

  // поиск пьес
  const playsArr = dataArray.reduce((acc, current) => {
    const check = current.title.toLowerCase().includes(searchKey) ? acc.push(current) : acc;
    return acc;
  }, [])

  // поиск авторов
  const authorsArr = dataArray.reduce((acc, current) => {
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

  // сортировка авторов по алфавиту
  const authorsArrSorted = authorsArr.reduce((acc, current) => {
    const group = current.author_lastName[0];
    if (!acc[group]) acc[group] = { group, children: [current], _id: current._id }
    else acc[group].children.push(current);
    return acc;
  }, {})

  return {
    plays: playsArr,
    authors: Object.values(authorsArrSorted)
  }
}

export default searchInfo;