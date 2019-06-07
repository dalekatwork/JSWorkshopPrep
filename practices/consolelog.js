// Console logging basics

var foo = {name: 'Aster', age: 90, active: true}
var bar = {name: 'Aster', age: 90, active: true}

// Bad
console.log(foo)
console.log(bar)

// Good Practices

// Computed Property Names
console.log({foo, bar})

// Console.table(...)
console.table([foo, bar])
