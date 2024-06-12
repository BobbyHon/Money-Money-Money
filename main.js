function calculateYears(principal, interest, tax, desired) {
    let counter = 0
      while (principal < desired){
        principal = principal + ((principal * interest) * (1 - tax))
        ++counter
      }
    return counter
  }