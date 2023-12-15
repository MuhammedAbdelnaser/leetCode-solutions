


const destCity = function(paths) {
  const finalDestination = paths.filter(path => {
    const destination = path[1]
    const isDestination = paths.filter(path => path[0] === destination)
    return isDestination.length === 0
  }
  )[0][1]
  return finalDestination
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))