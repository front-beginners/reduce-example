const frontBeginners = [
  { name: 'Carlinhos da massa', age: 25, title: 'JR', test: 35 },
  { name: 'Joãzinho do pastel', age: 32, title: 'PL', test: 56 },
  { name: 'Harry do Potter', age: 80, title: 'SR', test: 90 },
  { name: 'Vitinho o pequeno', age: 50, title: 'JR', test: 55 },
  { name: 'Juvenal', age: 80, title: 'SR', test: 55 },
  { name: 'Torquato', age: 32, title: 'JR', test: 55 },
]

let sumTest = 0

for (x = 0; x < frontBeginners.length; x++) {
  sumTest += frontBeginners[x].test
}

// console.log('resultado1: ', sumTest) // 236

//------------------------------------------

let sumTest2 = 0
frontBeginners.forEach((item) => {
  sumTest2 += item.test
})

// console.log('resultado2: ', sumTest2)

//-------------------------------------------

const sumTest3 = frontBeginners.reduce((acc, item, index, array) => {
  console.log(array)
  return acc + item.test
}, 0)

// console.log('resultado3: ', sumTest3)

//-------------------------------------------

const reducerDosBeginners = frontBeginners.reduce(
  (acc, item) => {
    const menorIdade = acc.menorIdade < item.age ? acc.menorIdade : item.age
    const maiorIdade = acc.maiorIdade > item.age ? acc.maiorIdade : item.age
    const sumTest = acc.sumTest + item.test
    return { menorIdade, maiorIdade, sumTest }
  },
  { sumTest: 0, menorIdade: undefined, maiorIdade: undefined }
)

// console.log(reducerDosBeginners)

//-------------------------------------------

const howManyTitles = frontBeginners.reduce((acc, item) => {
  if (acc[item.title] == null) {
    acc[item.title] = 1
  } else {
    ++acc[item.title]
  }

  return acc
}, {})

// console.log(howManyTitles)

//-------------------------------------------

const peoplePerAge = frontBeginners.reduce((acc, item) => {
  const age = item.age

  if (acc[age] == null) acc[age] = []
  acc[age].push(item.name)

  return acc
}, {})

// console.log(peoplePerAge)
