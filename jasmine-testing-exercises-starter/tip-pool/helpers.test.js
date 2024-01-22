describe("Utilities test (with setup and tear-down"), function () {
    beforeEach(function () {
        // set billAmtInput's value to 100
        // set tipAmtInput's value to 20
        // submit payment info
        billAmtInput.value = 100
        tipAmtInput.value = 20
        submitPaymentInfo()
    })

    it('should sum total tip amount of all payments in sumPaymentTotal()', function () {
        // expect (sumPaymentTotal('tipAmt')).toEqual(20)
        // bill amount value is equal to 200
        // tip amount value is equal to 40
        // submit the payment
        // expect (sumPaymentTotal('tipAmt')).toEqual(60)
        expect(sumPaymentTotal('tipAmt')).toEqual(20)
        billAmtInput.value = 200
        tipAmtInput.value = 40
        submitPaymentInfo()
        expect(sumPaymentTotal('tipAmt')).toEqual(60)
    })

    it("should sum total bill amount of all payments on sumPaymentTotal()", function () {
        // expected(sumPaymentTotal("billAmt")).toEqual(100)
        // bill amount value is 200
        // tip amount value is 40

        // submitPaymentInfo();

        // expect (sumPaymentTotal('billAmt')).toEqual(300)
        expect(sumPaymentTotal("billAmt")).toEqual(100)
        billAmtInput.value = 200
        tipAmtInput.value = 40
        submitPaymentInfo()
        expect (sumPaymentTotal('billAmt')).toEqual(300)
    })

    it("should sum total bull amount of all payments on sumPaymentTotal()", function () {
        // expect(sumPaymentTotal('tipPercent')).toEqual(20);
        // bill amount value is 100
        // tip amount value is 20

        // submit payment

        // expect sum payment total tipPercent to equal 40
        expect(sumPaymentTotal('tipPercent')).toEqual(20)
        billAmtInput.value = 100
        tipAmtInput.value = 20
        submitPaymentInfo()

        expect (sumPaymentTotal("tipPercent")).toEqual(40)
    })

    it("should sum tip percent of a single tip on calculateTipPercent()", function () {
        // expect (calculateTipPercent(100, 23)).toEqual(23)
        // expect (calculateTipPercent(111, 11)).toEqual(10)
        expect(calculateTipPercent(100, 23)).toEqual(23)
        expect(calculateTipPercent(111, 11)).toEqual(10)
    })

    it("should generate new td from value and append to tr on appendTD(tr, value", function () {
        // create a newTr alias and create an element "tr"
        // append new, 'test'

        // expect newTr.children.length).toEqual(1)
        // expect (newTr.firstChild.innerHTML).toEqual('test')
        let newTr = document.createElement("tr")
        appendTd(newTr, "test")

        expect(newTr.children.length).toEqual(1)
        expect(newTr.firstChild.innerHTML).toEqual('test')
    })

    it('should generate delete td and append to tr an appendDeleteBtn(tr, type)', function () {
        // create a "newTr" alias and create a "tr" element
        // appendDeleteBtn(newTr)

        // expect (newTr.children.length).toEqual(1)
        // expect (newTr.firstChild.innerHTML).toEqual("X")
        let newTr = document.createElement("tr")
        appendDeleteBtn(newTr)

        expect (newTr.children.length).toEqual(1)
        expect (newTr.firstChild.innerHTML).toEqual("X")
    })

    afterEach(function () {
        //bill amount input value is an empty string
        //tip amount input value is an empty string
        //payment t body.innerHTML amount is an empty string
        // summaryTds[0].innerHTML is an empty string
        // summaryTds[1].innerHTML is an empty string
        // summaryTds[2].innerHTML is an empty string
        // serverTbody.innerHTML is an empty string
        // allPayments is an empty object
        billAmtInput = ''
        tipAmtInput = ''
        paymentTbody.innerHTML = ''
        summaryTds[0].innerHTML = ''
        summaryTds[1].innerHTML = ''
        summaryTds[2].innerHTML = ''
        serverTbody.innerHTML = ''
        allPayments = {}
    })
}