/*Given a positive integer N, prints the consecutive numbers from 1 to N, each on a separate line. However, any number divisible by 2, 3 or 5 should be replaced by the word Foo, Bar or Baz respectively.
If a number is divisible by more than one of the numbers: 2, 3 or 5, it should be replaced by a concatenation of the respective words Foo, Bar and Baz in this given order. For example, numbers divisible by both 2 and 3 should be replaced by FooBar and numbers divisible by all three numbers: 2, 3 and 5, should be replaced by FooBarBaz.
*/

function fooBarBazInator (n) {
  let i = 1
  while (i <= n) {
    let output = ''
    if (i % 2 === 0) {output+='Foo';}
    if (i % 3 === 0) {output+='Bar';}
    if (i % 5 === 0) {output+='Baz';}

    output.length ? console.log(output) : console.log(i)
    i++;
  }
}
console.log(fooBarBazInator(30))
