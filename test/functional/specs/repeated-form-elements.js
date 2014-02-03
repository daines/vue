casper.test.begin('Repeated form elements', 4, function (test) {
    
    casper
    .start('./fixtures/repeated-form-elements.html')
    .then(function () {
        test.assertSelectorHasText('#texts', 'a,b')
    })
    .thenClick('#add', function () {
        test.assertSelectorHasText('#texts', 'a,b,c')
    })
    .then(function () {
        this.fill('#form', {
            "text0": 'd',
            "text1": 'e',
            "text2": 'f',
        })
    })
    .then(function () {
        test.assertField('text0', 'd')
        test.assertSelectorHasText('#texts', 'd,e,f')
    })
    .run(function () {
        test.done()
    })

})