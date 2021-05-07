function friend(friends){

  let buddy = [];
  
  for (let i = 0; i < friends.length; i++) {
    
    if (friends[i].length === 4) {
      buddy.push(friends[i])
      
    }
  }
  return buddy
}