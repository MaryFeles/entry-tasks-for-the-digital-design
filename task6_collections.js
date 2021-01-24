var model = [
  {
    id: 0,
    title: "Title text 1",
    text: "Some text 1",
    user: {
      id: 0,
      name: "user 1",
    },
  },
  {
    id: 1,
    title: "Title text 2",
    text: "Some text 2",
    user: {
      id: 1,
      name: "user 2",
    },
  },
  {
    id: 2,
    title: "Title text 3",
    text: "Some text 3",
    user: {
      id: 0,
      name: "user 1",
    },
  },
  {
    id: 3,
    title: "Title text 4",
    text: "Some text 4",
    user: {
      id: 2,
      name: "user 3",
    },
  },
  {
    id: 4,
    title: "Title text 5",
    text: "Some text 5",
    user: {
      id: 0,
      name: "user 1",
    },
  },
];

function recordsProcessing(recordsArray) {
    
  // создание массива уникальных пользователей
  let users = [];
  recordsArray.forEach((record) => {
    if (users.findIndex((user) => user.id == record.user.id) == -1) {
      users.push(record.user);
    }
  });

  // группировка записей по пользователям
  users.forEach((user) => {
    let userRecords = [];
    recordsArray.forEach((record) => {
      if (record.user.id == user.id) {
        userRecords.push({
          id: record.id,
          title: record.title,
          text: record.text,
        });
      }
    });
    user.posts = userRecords;
  });

  return users;
}

console.log(recordsProcessing(model));