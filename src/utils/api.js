import {
  getDataUTC
}  from './consts.js'

/*
const BASENAME = process.env.REACT_APP_BASENAME
console.log(BASENAME)
if (BASENAME === undefined) {
  url = 'https://51.250.27.86/'
} else {
  url = 'http://localhost:3001/'
}
*/
const url = 'https://postcomm.hopto.org/'


function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  return res.json()
}

export const reg = (name, surname, pass) => {
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
  return fetch(url+'getuser', {
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
  return fetch(url+'updateuser', {
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
  return fetch(url+'updateuser', {
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

export const createComment = (comment, idPost) => {
  let dateText = new Date(getDataUTC())
  return fetch(url+'createcomment', {
    method: 'POST',
    headers: {
      authorization: 'Bearer '+localStorage.jwt,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      idPost,
      comment,
      dateText: dateText.toString(),
      dateUTC: getDataUTC(),
    })
  })
  .then(
    (res) => {
      return res.json()
    }
  )
}

export const createPost = (header, text) => {
  let dateText = new Date(getDataUTC())
  return fetch(url+'createmes', {
    method: 'POST',
    headers: {
      authorization: 'Bearer '+localStorage.jwt,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      header,
      text,
      dateText: dateText.toString(),
      dateUTC: getDataUTC(),
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
  return fetch(url+'getmesuser/'+nameUser, {
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

export const getComments = (idPost) => {
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
