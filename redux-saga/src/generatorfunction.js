function* gen() {
    console.log('a')
    console.log('b')

}

const g = gen()


//  to run this 
//  it should be g.next()

function* gen1(i) {
    yield i;
    yield i +10
     return 20
 
 }
 const g1= gen1(10)
 g1.next()