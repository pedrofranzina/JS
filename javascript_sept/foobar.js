// TPC:
// quando o numero e multiplo de 3 substituir por "foo" (feito)
// quando o numero e multiplo de 5 substituir por "bar"
// quando o numero e multiplo de 3 e de 5 substituir por "foobar"

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("foobar");
    } else if (i % 5 == 0) {
        console.log("bar");
    } else if (i % 3 == 0) {
        console.log("foo")
    } else {
        console.log(i)
    }
}



