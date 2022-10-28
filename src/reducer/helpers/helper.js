export const filterList = (list, name, id) => {
  const newList = list.filter((item) => item[name] !== id);

  return newList;
};

export const editList = (list, id, object) => {
  const newList = list.map((item) => {
    if (item[id] === object[id]) {
      for (var propt in object) {
        item[propt] = object[propt];
      }
    }
    return item;
  });

  return newList;
};

export const validCredentials = (updatedCredentials) => {
  if (updatedCredentials.username === "") {
    return false;
  } else if (updatedCredentials.password === "") {
    return false;
  }
  return true;
};
