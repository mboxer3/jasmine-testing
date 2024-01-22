describe("payments test (with setup and tear-down"), function () {
    beforeEach(function () {
        // bill amount value is equal to 100
        // tip amount value is equal to 20
        billAmtInput.value = 100
        tipAmtInput.value = 20
    })
    it("should add a new payment to allPayments on submittingPaymentInfo()", function () {
        // submitPaymentInfo ()

        // expect(Objects.keys(allPayments).length).toEqual(1)
        // expect(allPayments['payment1'].billAmt).toEqual('100)
        // expect(allPayments['payment1'].tipAmt).toEqual("20")
        // expect(allPayments['payment1'].tipPercent).toEqual(20)

        submitPaymentInfo()

        expect(Objects.keys(allPayments).length).toEqual(1)
        expect(allPayments['payment1'].billAmt).toEqual('100')
        expect(allPayments['payment1'].tipAmt).toEqual('20')
        expect(allPayments['payment1'].tipPercent).toEqual(20)
    })

    it("should not add a new payment on submitPaymentInfo() with empty input", function () {
        // bill amount input value is an empty string
        // submitPaymentInfo()

        // expect(Objects.keys(allPayments).length).toEqual(0)
        billAmtInput.value = ''
        submitPaymentInfo()

        expect(Objects.keys(allPayments).length).toEqual(0)
    })
    
    it("should payment update #paymentTable on appendPaymentTables()", function () {
        // create an alias "curPayment" for createCurPayment();
        // allPayments['payment1'] = curPayment

        // select all the #paymentTable tbody tr td and give it an alias curTdList

        // expect(curTdList.length).toEqual(4)
        // expect(curTdList[0].innerText).toEqual("$100")
        // expect(curTdList[1].innerText).toEqual("$20")
        // expect(curTdList[2].innerText).toEqual("%20")
        // expect(curTdList[3].innerText).toEqual("X")
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment
        appendPaymentTable(curPayment)

        let curTdList = document.querySelectorAll("#paymentTable tbody tr td")

        expect(curTdList.length).toEqual(4)
        expect(curTdList[0].innerText).toEqual("$100")
        expect(curTdList[1].innerText).toEqual("$20")        
        expect(curTdList[2].innerText).toEqual("%20")
        expect(curTdList[3].innerText).toEqual("X")
    })

    it("should create a new payment on createCurPayment()", function () {
        // create an object with "billAmt: '100', tipAmt:'20', tipPercent:20" and give it an alias of "expectedPayment"
        // expect(createCurPayment()).toEqual(expectedPayment)

        let expectedPayment = { billAmt: '100', tipAmt: '20', tipPercent: '20' }
        expect(createCurPayment()).toEqual(expectedPayment)
    })

    it("should not crate payment with empty input on createCurPayment()", function () {
        // bill amt input's value should be an empty string
        // tip amt input's value should be an empty string
        //create an alias for createCurPayment and label it "curPayment"
        // expect(curPayment).toEqual(undefined)
        billAmtInput.value = ''
        tipAmtInput.value = ''
        let curPayment = createCurPayment()
        expect(curPayment).toEqual(undefined)
    })

    afterEach(function () {
        // bill amount input value is an empptyString
        // tip amt input value is an empty string
        // paymentTbody.innerHTML is an empty string
        // summaryTds[0].innerHTML is an empty string
        // summaryTds[1].innerHTML is an empty string
        // summaryTds[2].innerHTML is an empty string
        // server Tbody.innerHTML is an empty string
        // paymentId is 0
        // allPayments is an empty object
        billAmtInput.value = ''
        tipAmtInput.value = ''
        paymentTbody.innerHTML = ''
        summaryTds[0].innerHTML = ''
        summaryTds[1].innerHTML = ''
        summaryTds[2].innerHTML = ''
        serverTbody.innerHTML = ''
        paymentId = 0
        allPayments = {}
    })
}