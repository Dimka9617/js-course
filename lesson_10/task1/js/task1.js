"use strict";
// ------------------------
// let arr = [3, 5, 6]
// arr.forEach((element, index, baseArr)=>
// {if(element < 5) baseArr[index]=5}
// )
// document.write(`${arr}`)
// ================================================================================
// let arr = [5, 2, -3, -2]
// let arrTwo = arr.map((element) =>
// {if(element<0) 
// 	return element = 0
// else 
// 	return element}
// )
// document.write(`<div>${arr}</div>`)
// document.write(`<div>${arrTwo}</div>`)
// ================================================================================
// let names =["Dima", 'John', 'Anton']
// let test = names.map((name)=> name[0] 
// )
// document.write(`${test}`)




																									// МЕТОД AT (Доступ к элементам массива)================================================================================
// let arr = [3, 5, 15, 30, 34]
// let x = arr.at(-1)
// document.write(`${x}`)


																									// МЕТОД POP (УДАЛЕНИЕ ЭЛЕМЕНТА С КОНЦА МАССИВА)================================================================================
// let arr = [3, 2, 5, 6]
// let x = arr.pop()
// document.write(`<div>${x}</div>`)																									
// document.write(`<div>${arr}</div>`)																									

// let users = ["Dima", 'John', 'Anton']
// for(let i = users.length-1; i >= 0; i--){
// 	document.write(`${users[i]}`)
// }
																									// МЕТОД SPLICE (ДОБАВЛЕНИЕ ЭЛЕМЕНТА И УКАЗЫВАЕМ ПОЗИЦИЮ КУДА ЕГГО ДОБАВИТЬ)================================================================================
// let arr = [3, 2, 1]
// // ДОБАВЛЕНИЕ ЭЛЕМЕНТА В МАССИВ (2 - ПОЗИЦИЯ, 0 - КОЛ-ВО УДАЛЕННЫХ, 20 - САМ ЭЛЕМЕНТ)
// arr.splice(2,0,20)
// document.write(`${arr}`)

// let arr = [3, 2, 1, 32, 54, 65, 43]
// // УДАЛЕНИЕ ЭЛЕМЕНТА ИЗ МАССИВА (2 - ПОЗИЦИЯ С КОТОРОЙ НАЧАТЬ УДАЛЯТЬ, 3- КОЛ-ВО ЭЛМЕНТОВ ДЛЯ УДАЛЕНИЯ)
// arr.splice(2,3)
// document.write(`${arr}`)

// let arr = [2000, 2010, 2012, 1896, 2021]
// for (let i =0; i<arr.length; i++){
// 	if(arr[i] === 2010) {
// 		arr.splice(i+1,0,2015)
// 		i++
// 	}
	
// }
// document.write(`${arr}`)


// let arr = [32, 54, 31, 43, 65, 78, 45, 43, 76, 87, 54]
// arr.splice(3,2,1,0,2)
// document.write(`${arr}`)
																								

																										// МЕТОД SLICE (КОПИРОВАНИЕ ЧАСТИ МАССИВА)========================================================================
																										// // КОПИРОВАНИЕ ЭЛЕМЕНОВ  МАССИВА (2 - ПОЗИЦИЯ, 4 - ПО КАКОЙ ЭЛЕМЕНТ(НЕ УЧИТЫВАЕТСЯ))
	// let arr = [32, 54, 76, 87, 54, 105, 123, 433]	
	// let part=arr.slice(2,4)
	// document.write(`${part}`)																								

	// let arr = [32, 54, 76, 87, 54, 105, 123, 433]
	// const halfOfArr = arr.length/2
	// let firstArr = arr.slice(0, halfOfArr)
	// let secondArr = arr.slice(halfOfArr)
	// let newArr = [...secondArr, ...firstArr]
	// document.write(`${newArr}`)
																											// МЕТОД INDEX OF (ПОИСК ЭЛЕМЕНТОВ МАССИВА)========================================================================
// let arr = [3, 2, 6, 8, 65, 453]
// let a = arr.indexOf(8)		
// document.write(`${a}`)
// let arr = [3, 2, 6, 8, 65, 453, 45, 3424, 4342, 42345, 45, 34]		
// let a = arr.indexOf(45, 7)		
// document.write(`${a}`)		
//------------------------------------------------------------------------------------
// let arr = [32, 13, 54, 3, 0, 54, 76, 86, 4, 0, 134, 54, 34, 78]
// let zeroIndexOne = arr.indexOf(0)
// document.write(`<div>${zeroIndexOne}</div>`)

// let zeroIndexTwo = arr.indexOf(0,zeroIndexOne+1)
// document.write(`<div>${zeroIndexTwo}</div>`)

// let newArr = arr.slice(zeroIndexOne+1, zeroIndexTwo)
// document.write(`${newArr}`)



// Сделать массив между первым нулем и последним LASTINDEXOF
// let arr = [32, 13, 54, 3, 0, 54, 76, 86, 4, 0, 134, 54, 0, 34, 78]
// let zeroIndex = arr.indexOf(0)
// let lastIndex = arr.lastIndexOf(0)
// let newArr = arr.slice(zeroIndex+1, lastIndex)
// document.write(`${newArr}`)

// ----------------------FINDINDEX 
// let arr = [32, 13, 54, 3, 0, 54, 76, 86, 4, 0, 134, 54, 0, 34, 78]
// const element = arr.findIndex((el)=> el >100)
// document.write(`${element}`)

// let ageList = [43, 56, 14, 43, 78, 65, 78, 54]
// let firstRetired = ageList.findIndex((el) => el >= 65)
// document.write(`${firstRetired}`)

																												// МЕТОД FIND (ПОИСК ЭЛЕМЕНТА С ЗАДАННЫМ УСЛОВИЕМ)========================================================================
// let ageList = [43, 56, 14, 43, 78, 65, 78, 54]		
// let age = ageList.find((el) => el > 65)		
// document.write(`${age}`)																							

// ----------------------------- FINDLAST(ИЩЕТ С КОНЦА ЭЛЕМЕНТ)
// let ageList = [43, 56, 14, 43, 78, 65, 758, 54]
// let age = ageList.findLast((el) => el > 100)
// document.write(`${age}`)
																												// МЕТОД INCLUDES (ЕСТЬ ЛИ ТАКОЙ ЭЛЕМЕНТ В МАССИВЕ)========================================================================
// let arr = [3, 2, 6]
// // document.write(`${arr.includes(5)}`) 
// arr.includes(5) ? document.write(`Request`) : document.write(` Not Request`)
																												// МЕТОД FILTER (СОЗДАНИЕ НОВОГО МАССИВА, В КОТОРОМ ЭЛЕМЕНТЫ ОТВЕЧАЮТ ЗАДАННОМУ УСЛОВИЮ)========================================================================
// let ageList = [43, 56, 14, 43, 78, 65, 78, 54]	
// let newList = ageList.filter((el) => el > 60)
// document.write(`${newList}`)	
																												// МЕТОД EVERY(ВСЕ ЭЛЕМЕНТЫ)/SOME(ХОТЯ БЫ ОДИН) (ПРОВЕРКА ЭЛЕМЕНТОВ НА СООТВЕТСТВИЕ УСЛОВИЯ)=====================================	
// let ageList = [43, 56, 14, 43, 78, 65, 78, 54]
// // let res = ageList.every((el) => el >50)
// // document.write(`${res}`)
// let res = ageList.some((el) => el >50)
// document.write(`${res}`)
																												// МЕТОД REDUCE (ВЫЧИСЛЕНИЕ ЗНАЧЕНИЯ НА ОСНОВЕ ВСЕГО МАССИВА)========================================================================================================	
// let ageList = [43, 56, 14, 43, 78, 65, 78, 54]	
// let sum = ageList.reduce((prevSum, el, i, baseArr) => prevSum + el)
// document.write(`${sum}`)
//-----------------------------------------------------------------------------

// let arr = [2, 3, 4]
// let product = arr.reduce((prevProduct,el, index, baseArr) => prevProduct * el)
// document.write(`${product}`)

// let arr = [2, 3, 4, 5, 8]
// let sum = arr.reduce((prevSum, el) => prevSum + el, 4)
// document.write(`${sum}`)



// СУММА ПАРНЫХ ЧИСЕЛ-----------------------------------------------------------------------------
// let arr = [ 3, 1 , 5 , 6, 3, 4, 1, 9, 2 ]
// let sumEven = arr.reduce((prevSum, el) => el%2===0 ? prevSum + el : prevSum, 0)
// document.write(`${sumEven}`)

// КОЛ-ВО СЕМЕРОК-----------------------------------------------------------------------------
// let arr = [3, 2, 7, 5, 7]
// let total = arr.reduce((prevEl,el) => el === 7 ? prevEl + 1 : prevEl, 0)
// document.write(`${total}`)
																												// МЕТОД SORT (СОРТИРОВКА ЭЛЕМЕНТОВ МАССИВА) !!!ЧИСЛА СОРТИРОВАТЬ НЕЛЬЗЯ , ТОЛЬКО РЯДОЧКИ STRING=============================================================================
// let arr = [3, 2, -2, -5, 1, -3]
// let res = arr.sort((elOne, elTwo)=>{
// 	if(elOne>elTwo) return 1
// 	else if(elOne<elTwo) return -1
// 	else return 0
// }
// )
// document.write(`${res}`)

// let arr = [3, 2, -2, -5, 1, -3]
// arr.sort((elOne,elTwo) => elOne - elTwo)
// document.write(`${arr}`)


// let names = ['Irina', 'Dima', 'Oly', 'Aleksandr']
// names.sort()
// document.write(`${names}`)

// ВНАЧАЛЕ ПАРНЫЕ А ПОТОМ НЕПАРНЫЕ
// let arr = [ 3, 1 , 5 , 6, 3, 4, 1, 9, 2 ]
// arr.sort((numOne, numTwo) => {
// 	if(numOne%2 === 0) return -1
// 	else if(numTwo%2!==0) return 1
// 	else return 0
// })
// document.write(`${arr}`)



// let ages = [34, 54, 12, 54, 76, 87, 65, 45, 34]
// ages.sort((numOne, numTwo) => {
// 	if(numOne >= 65) return -1
// 	else if (numTwo >=65) return 1
// 	else return 0
// })
// document.write(`${ages}`)


																		 //------------------- map
      																// Дано масив цін. Створити новий масив додавши 20%.
// let arr = [ 34, 32, 65, 876]
// let tax = 20
// let newArr = arr.map((element) => element = element + element*tax/100)
// document.write(`${newArr}`)
      																// Дано масив років народження працівників (усі народились 1 січня). Створити масив з кількістю років
// let ages = [2012, 1996, 2005, 2003]
// const currentYear = 2024
// let newAg = ages.map((age) => currentYear - age)
// document.write(`${newAg}`)																	
      																// Дано масив вартості товару у доларах. Створити масив цін у гривнях
// let usdPrice = [34, 65, 76]
// let uahPrice = usdPrice.map((currency) => currency * 42)
// document.write(`${uahPrice}`)																		

																		  //--- forEach ----------------
      // Дано масив цін. Вивести їх з індексами окремими div
      // let prices = [100, 90, 5, 13, 17, 16, 18]
		// prices.forEach((element,index) => document.write(`${index + 1} : ${element}`))
		

																		  //Задача. Масив номерів днів. Сформувати масив з відповідними назвами днів
      // // //                0         1      2        3       4      5       6
      // let daysNames = ['Пон.', 'Вівт.', 'Сер.', 'Четв.', 'Пн.', 'Суб.', 'Нед']
      // let daysNumbersList = [3, 2, 1, 5, 4, 7]
		// let newArr = daysNumbersList.map((index)=>daysNames[index-1])
		// document.write(`${newArr}`)


																			// ------------- push/pop ----------
      // 1) Реєструвати імена працівників (вводити і зберігати у масиві).
      // let users = ['Ivan', 'Petro', 'Olga']
      // // // //----------
      // // // // 1) Реєструвати імена працівників (вводити і зберігати у масиві). Виводити та видаляти їх у порядку надходження.
		// while(users.length){
		// 	document.write(`${users.shift()}`)
		// }
		


																	// // 2) Реєструвати імена працівників (вводити і зберігати у масиві). Виводити та видаляти їх у порядку зворотному до порядку надходження.
//  let users = ['Ivan', 'Petro', 'Olga']
//  while(users.length){
// 	document.write(`${users.pop()}<br>`)
//  }

	   //------------ splice
      // Задача 1. Дано масив років. Після кожного значення 2010 додати 2015.
      // let yearsList = [200, 2010, 2015, 1997, 1989, 2001, 2010, 2019]
		// for(let i = 0; i<yearsList.length; i++){
		// 	if(yearsList[i] === 2010){
		// 		yearsList.splice(i+1,0,2015)
		// 		i++
		// 	}
		// }
		// document.write(`${yearsList}`)

		  // Задача 2. Дано масив показів темератур за рік (12 місяців). Видалити значення, що відповідають літнім місяцям.
      //             0    1    2   3    4    5   6   7  8   9   10 11
      // let tempList = [12, 23, 12, 455, 123, 12, 34, 56, 76, 34, 56, 67]
		// tempList.splice(5,3)
		// document.write(`${tempList}`)


  														

		 																// Задача 3. Дано масив показів темератур за рік (12 місяців). Замінити значення літніх місяців нулями.
	//  let tempList = [12, 23, 12, 455, 123, 12, 34, 56, 76, 34, 56, 67]
	//  tempList.splice(5,3,0,0,0)		
	//  document.write(`${tempList}`)															
																		 // Задача 1. Дано масив  показів темератур за рік (12 місяців). Створити окремі масиви, що скдаюаться зі з начень, які відповідають елементам першого і другого півріччя
      //                     0  1  2   3   4   5   6   7   8   9  10  11
      // let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
		// let half = temperatures.length/2
		// let firstHalf = temperatures.splice(0,half)
		// document.write(`${firstHalf}`)
		// document.write(`${temperatures}`)
		// let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
		// let half = temperatures.length/2
		// let firstHalf = temperatures.slice(0, half)
		// let secondHalf = temperatures.slice(half)
		// document.write(`${firstHalf}`)
		// document.write(`${secondHalf}`)


																			//------------- indexOf
      // Задача 1. Дано масив чисел, що містить два нулі. Створити масив, що складається з елементів між цими нулями
      // //        0 1  2  3  4  5  6  7  8
      // let arr = [23, 1, 4, 0, 4, 6, 9, 0, 2, 12, 75]
		// let firstIndex = arr.indexOf(0)
		// let secondIndex = arr.indexOf(0, firstIndex+1)
		// let newArr = arr.slice(firstIndex+1, secondIndex)
		// document.write(`${newArr}`)


		// Задача 2. Дано масив чисел, що містить нулі. Створити масив, що складається з елементів між першим і другим нулем
      // let arr = [23, 1, 4, 0, 4, 6, 9, 0, 2, 12, 0, 2, 11, 8, 4, 53]
		// let firstIndex = arr.indexOf(0)
		// let secondIndex = arr.indexOf(0, firstIndex+1)
		// let newArr = arr.slice(firstIndex+1, secondIndex)
		// document.write(`${newArr}`)

      // Задача 3. Дано масив чисел, що містить нулі. Створити масив, що складається з елементів між першим і останнім нулем
      // let arr = [23, 1, 4, 0, 4, 6, 9, 0, 2, 12, 0, 2, 11, 8, 4, 53]
		// let firstIndex = arr.indexOf(0)
		// let lastIndex = arr.lastIndexOf(0)
		// let newArr = arr.slice(firstIndex+1, lastIndex)
		// document.write(`${newArr}`)

		 // Задача 4. Дано масив з віком відвідувачів. Визначити індекс першого пенсіонера (>=65)
		//    let agesList = [21, 13, 45, 68, 23, 74, 66, 9, 25, 56, 69]
		// let firstIndex = agesList.findIndex((age)=> age>=65)
		// document.write(`${firstIndex}`)

	// Задача 5. Дано масив з віком відвідувачів. Визначити індекс останнього пенсіонера
      // let ages = [21, 13, 45, 68, 23, 74, 66, 9, 25, 56, 69]
		// let lastIndex = ages.findLastIndex((age)=> age>=65)
		// document.write(`${lastIndex}`)


  	//----- find/includes
		// Задача 1. Дано масив оцінок двійочника.
      // //a) Визначити першу погану оцінку (<4).
      // let scores = [8, 9, 12, 4, 7, 1, 10, 8, 9, 2]
		// let badGrade = scores.find((grade)=> grade <4)
		// document.write(`${badGrade}`)

		// //b) Визначити останню погану оцінку (<4).
      // let scores = [8, 9, 12, 4, 7, 1, 3, 8, 9, 12]
		// let lastBadGrade = scores.findLast((grade)=> grade <4)
		// document.write(`${lastBadGrade}`)

		// Задача 3. Дано масив з номерами кімнат, які звернулись на рецепцію. Визначити, чи зверталися з кімнати номер 5.
      // let rooms = [12, 15, 7, 23, 5, 21, 35, 8, 19]
		// rooms.includes(5) ? document.write("Yes") : document.write("No")


		 // ------------- Reduce
      // Задача 0. Знайти суму елементів масиву
      // let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
		// let res = arr.reduce((prevSum, el) => prevSum + el)
		// document.write(`${res}`)

		    // Задача 0. Знайти добуток елементів масиву
      // let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
		// let res = arr.reduce((prevProd,el) => prevProd * el)
		// document.write(`${res}`)


		 // // Задача 1. Знайти добуток від’ємних елементів масиву.
		// let arr = [10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
		// let res = arr.reduce((prev, el)=> (el<0? prev*el : prev), 1)
		// document.write(`${res}`)
    

		 // Задача 2. Знайти суму парних елементів
      // let arr = [13, 9, 5, 13, 17, 16, 18, 19, 21, 11, 7, 4]
		// let sum = arr.reduce((prev, el) => (el%2===0 ? prev+el : prev), 0)
		// document.write(`${sum}`)

		
		  // Задача 3. Дано масив. Підрахувати кількість 7
      // let arr = [10, 9, 5, 13, 7, 16, 18, 19, 21, 11, 7, 4]
		// let res = arr.reduce((prev, el) =>el===7? prev+1 : prev, 0)
		// document.write(`${res}`)


		  // Задача 4. Знайти максимальний елемент
      // let arr = [10, 9, 5, 13, 7, 16, 18, 19, 21, 11, 7, 4]
		// let res = arr.reduce((prev, el)=> prev>el? prev: el)
		// document.write(`${res}`)


		// Задача 5. Знайти максимальний серед від"ємних елемент
      // let arr = [10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
		// let res = arr.reduce((prev, el) => (el<0 && el>prev)? prev : el)
		// document.write(`${res}`)

		// -------------  filter
      //Задача 1. Дано покази термометра за місяць. Сформувати покази тільки доданих значень(>0)
      // let temperaturesList = [-10, 3, -21, 20, 18]
		// let res = temperaturesList.filter((el) => el >0)
		// document.write(`${res}`)


		//Задача 2. Дано покази термометра за місяць. Сформувати покази тільки значень, які знаходяться між 10 і 15 градусами цельсія
   //    let temperaturesList = [-10, 3, -21, 10, 18]
	// let res = temperaturesList.filter((el) => el>=10 && el <=15)
	// document.write(`${res}`)

		 //Задача 3. Дано масив цін. Сформувати новий масив, який складається з цін більших за 100 грн.
      // let prices = [124, 6700, 2345, 322, 99, 324, 9000]
		// let res = prices.filter((price) => price>100)
		// document.write(`${res}`)

		//Задача 4. Дано масив імен учнів. Сформувати масив, які починаються на букви : 'A', 'B', 'J', 'S'
      // let names = ['Nona', 'John', 'Sara', 'Peter', 'Monica', 'Andrew', 'Niko']
      // const searchLetters = ['A', 'B', 'J', 'S']
		// let arr = names.filter((name) => searchLetters.includes(name[0]))
		// document.write(`${arr}`)



		 // -------------  some - every
      // Задача 1. Дано масив показників термометра протягом місяця. З’ясувати, чи є серед них є дні, коли температура була меншою за 5 градусів.
      // let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
		// let res = temperatures.every((el) => el<5? document.write("yes") : document.write(`no`))
		

		   // Задача 2. Визначити, чи є серед вказаних цін товарів ті, які дорожчі за 1000 грн.
      // let prices = [124, 6700, 2345, 322, 99, 324, 9000]
		// prices.some((el) => el > 1000) ? document.write(`yes`) : document.write(`no`)


		// Задача 3. Дано масив оцінок
		// 1)Визначити чи є він хорошистом (усі оцінки більші або рівні 7)
   //    let scores = [8, 9, 12, 4, 7, 5, 10, 8, 9, 7]
	// scores.every((grade)=>grade >=7)? document.write('good') : document.write('bad')
		// Задача 4. Дано масив років відвідувачів басейну. Визначити чи були пенсіонери.
   //    let ages = [21, 13, 45, 68, 23, 74, 66, 9, 25, 56, 69]
	// ages.some((age)=> age >=65)? document.write('yes'): document.write('no')


		   //Задача. Дано масив показників термометра протягом місяця. З’ясувати, чи усі показники є більшими за 10 градусів.
   //    let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
	// temperatures.every((t) => t>10)? document.write('yes') : document.write('no')




	   //------------- Sort
      // Приклад. Упорядквати масив чисел за зростанням
      // let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
		// arr.sort((elOne, elTwo) =>{
		// 	if(elOne>elTwo) return 1
		// 	else if (elOne < elTwo) return -1
		// 	return 0
		// })
		// document.write(`${arr}`)



		 // Приклад. Упорядквати масив чисел за спаданням
      // let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
		// arr.sort((elOne, elTwo) => {
		// 	if(elOne>elTwo) return -1
		// 	else if (elOne<elTwo) return 1
		// 	return 0
		// })
		// document.write(`${arr}`)


		    // Приклад. Упорядкувати масив імен за зростанням
      // let names = ['Nona', 'John', 'Sara', 'Peter', 'Monica', 'Andrew', 'Niko']
		// names.sort()
		// document.write(`${names}`)




		// Приклад. Упорядкувати масив імен за спаданням
      // let names = ['Nona', 'John', 'Sara', 'Peter', 'Monica', 'Andrew', 'Niko']
      //--- спочатку соруємо за зростанням, потім розвертаємо масив




		// Приклад. Упорядувати числа так, щоб спочатку йшли парні, потім непарні.
      // let arr = [10, 9, 5, 13, 17, 16, 18, 19, 21, 11, 7, 4]
		// arr.sort((elOne, elTwo) => {
		// 	if(elOne%2===0 && elTwo%2!==0) return -1
		// 	else if(elOne%2!==0 && elTwo%2 === 0) return 1
		// 	return 0
		// })
		// document.write(`${arr}`)



	if(confirm("Start")){
		const userNum = parseInt(prompt("Enter the numbers of elements in the array:"))
		const prices = getPriceArr()
		document.write(`<div style="font-size:36px; font-weight:bold">Base array: ${prices}</div> <hr>`)

		function getRandomValue(min,max){
			return min + Math.floor(Math.random() * (max-min+1))
		}
		// --------------------------------------------------------------------
		function getPriceArr(){
			let prices = []
			for(let i = 0; i<userNum; i++){
				let priceValue = getRandomValue(1,10000)
				prices.push(priceValue)
			}
			return prices
		}
		// --------------------------------------------------------------------Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

		let pricesGreaterOneHunder = prices.filter((price) => price > 1000)
		document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.: ${pricesGreaterOneHunder}</div><br>`)

		// --------------------------------------------------------------------Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
		
		let res = prices.reduce((prevEl,el,index)=> {
			if(el>1000) 
			prevEl.push(index)
		return prevEl
		}, [])
		document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.: ${res}</div><br>`)

		// --------------------------------------------------------------------Сформувати список з тих цін, які більші за попереднє значення

		let pricesGreaterPrev = []
		for(let i = 0; i<prices.length; i++){
			if(prices[i] > prices[i-1]) pricesGreaterPrev.push(prices[i])
		}
		document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">Сформувати список з тих цін, які більші за попереднє значення: ${pricesGreaterPrev}</div><br>`)

	// --------------------------------------------------------------------Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

	const maxPrice = Math.max(...prices)
	let newArr = prices.map((price) => (price * 100 / maxPrice).toFixed(2))
	document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального : ${newArr}</div><br>`)

	// --------------------------------------------------------------------Визначити, чи є ціна, що менше 1000

	document.write(`<div style ="font-weight:bold; margin-bottom:15px; font-size:35px">Визначити, чи є ціна, що менше 1000</div>`)
	prices.some((el)=> el < 1000)? document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">Yes</div>`) : document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">No</div>`)

// --------------------------------------------------------------------Визначати, чи усі ціни більше за 1000

document.write(`<div style ="font-weight:bold; margin-bottom:15px; font-size:35px">Визначати, чи усі ціни більше за 1000</div>`)
prices.every((price) => price >1000)? document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">Yes</div>`) : document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">No</div>`)

// --------------------------------------------------------------------Підрахувати кількість цін, що більше за 1000

let resTwo = prices.reduce((total, el) => el>1000? total+1 : total, 0)
document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">Підрахувати кількість цін, що більше за 1000: ${resTwo}</div><br>`)

// --------------------------------------------------------------------Підрахувати суму цін, що більше за 1000

let sumRes = prices.reduce((sum,el) => el>1000? sum+=el : sum)
document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">Підрахувати суму цін, що більше за 1000: ${sumRes}</div><br>`)

// --------------------------------------------------------------------Знайти першу ціну, що більше за 1000

const price = prices.find(value => value > 1000)
document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">Знайти першу ціну, що більше за 1000: ${price}</div><br>`)

// -------------------------------------------------------------------- Знайти індекс першої ціни, що більше за 1000

let resThree  = prices.findIndex(el => el >1000)
document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">Знайти індекс першої ціни, що більше за 1000: ${resThree}</div><br>`)

// --------------------------------------------------------------------Знайти останню ціну, що більше за 1000

let resFour = prices.findLast(el => el > 1000)
document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">Знайти останню ціну, що більше за 1000: ${resFour}</div><br>`)

// --------------------------------------------------------------------Знайти індекс останньої ціни, що більше за 1000

let resFive = prices.findLastIndex(el=>el>1000)
document.write(`<div style="font-weight:bold; margin-bottom:15px; font-size:35px">Знайти індекс останньої ціни, що більше за 1000: ${resFive}</div>`)
	}
		