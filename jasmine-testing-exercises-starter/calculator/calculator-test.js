
it('should calculate the monthly rate correctly', function () {
  // create a const "values" object equal to amount:10000 , years:8, rate: 5.8
  // expect (calculateMonthlyPayment(values)).toEqual("130.44")
  const values = { amount: 10000, years: 8, rate: 5.8 }
  expect(calculateMonthlyPayment(values)).toEqual("130.44")
});


it("should return a result with 2 decimal places", function() {
  // create a const "values" object equal to amount:10043 , years:8, rate: 5.8
  // expect (calculateMonthlyPayment(values)).toEqual("131.00")
  const values = { amount: 10043, years: 8, rate: 5.8 }
  expect(calculateMonthlyPayment(values)).toEqual("131.00")
});

it("should handle terribly high interest rates", function () {
  // create a const "values" object equal to amount:1000 , years:44, rate: 99
  // expect (calculateMonthlyPayment(values)).toEqual("82.50")
  const values = { amount: 1000, years: 44, rate: 99 }
  expect(calculateMonthlyPayment(values)).toEqual("82.50")
})
