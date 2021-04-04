export function date () {
  try {
    var currentDate = ''
    currentDate = new Date()
    var now = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} às ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`

    return now
  } catch (err) {
    console.log(err)
  }
}
