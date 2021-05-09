function filter_list(list) {
 
  return list.filter(number => {
    if (typeof number === 'number') {
      return true
    }
  }) 
}