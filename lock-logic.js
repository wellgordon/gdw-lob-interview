const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})


function changeDialValue (index, incrementBy) {

  if(incrementBy === 1) {
    if(lockState.wheels[index] < 9) {
      lockState.wheels[index] += 1

      //could also be solved without JSON.stringify but for this problem seemed the most direct approach
      if(JSON.stringify(lockState.wheels) === JSON.stringify(SECRET_COMBO)) {
        lockState.locked = false
        redirect('./gordon-daole-wellman')
      }
      }
    }
  

  if(incrementBy === -1) {
    if(lockState.wheels[index] > 0) {
      lockState.wheels[index] -= 1
      if(JSON.stringify(lockState.wheels) === JSON.stringify(SECRET_COMBO)) {
        lockState.locked = false
        redirect('./gordon-daole-wellman')
      }
    }
  }


}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
