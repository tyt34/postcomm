let url
if (process.env.REACT_APP_ENV === undefined) {
  url = 'http://localhost:3001/'
} else {
  url = process.env.REACT_APP_ENV
}

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  return res.json()
}

export const reg = (name, surname, pass) => {
  console.log(' send: ', name, surname, pass)
  return fetch(url+'reg', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      surname,
      pass,
      email: "none@none.ru",
      phone: "0",
      company: "none",
      jobpost: "none",
      avatar: 'default'
    })
  })
  .then(
    (res) => {
      return res.json()
    }
  )
}

export const log = (name, pass) => {
  console.log(' send: ', name, pass)
  return fetch(url+'log', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name, pass
    })
  })
  .then(
    (res) => {
      return res.json()
    }
  )
}

export const getUser = () => {
  return fetch(url+'getUser', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer '+localStorage.jwt,
    }
  })
  .then(
    (res) => {
      return getResponseData(res)
    }
  )
}

export const updateUser = (name, surname, email, phone, company, jobpost, avatar) => {
  //console.log(' n/a ', name, '/', avatar)
  return fetch(url+'updateUser', {
    method: 'PATCH',
    headers: {
      authorization: 'Bearer '+localStorage.jwt,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      surname,
      email,
      phone,
      company,
      jobpost,
      avatar
    })
  })
  .then((res) => {
    return res.json()
  })
}

export const updateAvatar = (avatar) => {
  return fetch(url+'updateUser', {
    method: 'PATCH',
    headers: {
      authorization: 'Bearer '+localStorage.jwt,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar
    })
  })
  .then((res) => {
    return res.json()
  })
}

export const createPost = (header, text) => {
  console.log(' send: ', header, text)
  let date = new Date();
  let dateUTC =  Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
  let dateText = new Date(dateUTC);
  console.log(' -> ', dateUTC)
  console.log(' --> ', dateText.toString())

  return fetch(url+'createMes', {
    method: 'POST',
    headers: {
      authorization: 'Bearer '+localStorage.jwt,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      header,
      text,
      dateText: dateText.toString(),
      dateUTC
    })
  })
  .then(
    (res) => {
      return res.json()
    }
  )
}

export const getMesForProfile = () => {
  return fetch(url+'getmesprof', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer '+localStorage.jwt,
    }
  })
  .then(
    (res) => {
      return getResponseData(res)
    }
  )
}

export const getMesUser = (nameUser) => {
  //console.log(url+'getMesUser/'+nameUser)
  return fetch(url+'getMesUser/'+nameUser, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer '+localStorage.jwt,
    }
  })
  .then(
    (res) => {
      return getResponseData(res)
    }
  )
}


export const getAvaForPrevPost = (owner) => {
  //console.log('link ', url+'getava/'+owner)
  return fetch(url+'getava/'+owner, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer '+localStorage.jwt,
    },
  })
  .then(
    (res) => {
      return getResponseData(res)
    }
  )
}

export const getPost = (idPost) => {
  //console.log('link ', url+'getpost/'+idPost)
  return fetch(url+'getpost/'+idPost, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer '+localStorage.jwt,
    },
  })
  .then(
    (res) => {
      return getResponseData(res)
    }
  )
}

export const getAllUsers = () => {
  return fetch(url+'getallusers', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer '+localStorage.jwt,
    },
  })
  .then(
    (res) => {
      return getResponseData(res)
    }
  )
}

export const createComment = (comment, idPost) => {
  console.log(' ---> send: ', comment, idPost)
  let date = new Date();
  let dateUTC =  Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
  let dateText = new Date(dateUTC);
  //console.log(' -> ', dateUTC)
  //console.log(' --> ', dateText.toString())

  return fetch(url+'createComment', {
    method: 'POST',
    headers: {
      authorization: 'Bearer '+localStorage.jwt,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      idPost,
      comment,
      dateText: dateText.toString(),
      dateUTC
    })
  })
  .then(
    (res) => {
      return res.json()
    }
  )
}

export const getComments = (idPost) => {
  //console.log('link ', url+'getpost/'+idPost)
  return fetch(url+'getcomments/'+idPost, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer '+localStorage.jwt,
    },
  })
  .then(
    (res) => {
      return getResponseData(res)
    }
  )
}
