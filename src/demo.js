const state = {
  counters: [
    { id: 0, value: 0 },
    { id: 1, value: 1 },
  ],
}

function modify(counter) {
  const new_counters = [...state.counters]
  new_counters[0] = { ...counter }
  //   new_counters[0] = counter
  return new_counters
}

const new_counter = { id: 0, value: 1 }
const new_counters = modify(new_counter)

console.log(new_counters)

new_counter.value = 3

console.log(new_counters)
