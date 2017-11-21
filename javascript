var man = {
   hands: 2,
   legs: 2,
   heads: 1
};
// for-in 循环
for (var i in man) {
   if (man.hasOwnProperty(i)) { // 过滤
      console.log(i, ":", man[i]);
   }
}
解说：hasOwnProperty()方法过滤原型属性
