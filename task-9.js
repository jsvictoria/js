/*
#### Задача 9

Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

var arr = [1,2,3,4,5,6];
var length = arr.length;

for (let i = 0; i < length; i++) {
	for (let k = 0; k < length - i; k++) {
		let tmp = arr[k];
		if (tmp < arr[k+1]) {
			arr[k] = arr[k+1];
			arr[k+1] = tmp;
		}
	}
}

console.log(arr);
