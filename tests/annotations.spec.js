const{test, expect}= require('@playwright/test');
test.only('test 1',async ({page})=> {


})

test.skip('test 2',async ({page})=> {


})

test('test 3',async ({page})=> {
test.fixme()

})

test('test 4',async ({page})=> {
test.fail()

})