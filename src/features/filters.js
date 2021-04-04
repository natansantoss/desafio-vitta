export function filterByStatus (status, list) {
  var todoFilter = []

  if (status === 'pending') {
    todoFilter = list.filter(todo => { return todo.checked === 'pendings' })
  } else if (status === 'complete') {
    todoFilter = list.filter(todo => { return todo.checked === 'complete' })
  } else {
    todoFilter = list
  }
  return todoFilter
}

export function filterByText (search, list) {
  var results = list.filter(todo => {
    return todo.title === search
  })

  if (results) {
    console.log(results)
    return results
  } else {
    return 0
  }
}

export function filterByDate (search, list) {
  var results = list.filter(todo => {
    return todo.date === search
  })

  if (results) {
    console.log(results)
    return results
  } else {
    return 0
  }
}
