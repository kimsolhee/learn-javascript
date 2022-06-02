/**
 * Shorthand property names(객체 초기자)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 * 
 * var는 동일한 이름의 중복 선언이 가능하여
 * ES6 부터 변수 선언 방식이 추가(let, const)
 * 
 * let : 변수에 재할당이 가능.
 * const : 변수 재선언, 변수 재할당 모두 불가능
 * 
 */

 {
  const solhee = {
    name: 'solhee',
    age: '25',
  };

  const name = 'Ellie';
  const age = '18';

  // 💩
  const ellie2 = {
    name: name,
    age: age,
  };

  // ✨
  // key와 value의 이름이 동일한 경우 축약해서 작성이 가능.
  const ellie3 = {
    name,
    age,
  };

  console.log(solhee, ellie2, ellie3);
  console.clear();
}

/**
 * Destructuring Assignment(구조 분해 할당)
 * 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 */
{
  // object
  const student = {
    name: 'Anna',
    level: 1,
  };

  // 💩 
  // 이전에 하던 방식
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // ✨
  // object에 있는 key이름들을 {}(괄호)안에 정의해준다.
  {
    const { name, level } = student;
    console.log(name, level);

// object에 있는 key이름들을 다른 이름으로 선언해줄 경우
// {원래 key name : 내가 명시해주고 싶은 key name}
    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ['🐶', '😽','❤'];

  // 💩
  // 이전에 하던 방식
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // ✨
  {
    const [first, second, third] = animals;
    console.log(first, second, third);
  }
  console.clear();
}

// 👏 정리
// Destructuring assignment : {}
// array : []

/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 */
{
  // object를 가르키고 있는 변수는 object를 담고있는 곳이 아니라 object가 들어있는 메모리의 주소의 값을 가지고 있는 것.
  // ...array 복사할 경우 array의 주소값만 복사하는 것 => 원래 object의 값을 변경하면 복사한 array값도 동일하게 바뀜.
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  // ... <- array에 있는 아이템들을 각각 낱개로 복사해온다.
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  // array에 있는 아이템들을 각각 낱개로 복사해오면서 새로운 값을 추가하고 싶을 경우
  // Spread Syntax 쓴 다음 추가하고자 하는 값을 작성해준다.
  const arrayCopy2 = [...array, { key: 'key3' }];
  obj1.key = 'newKey';
  console.log(array, arrayCopy, arrayCopy2);

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ['🍑', '🍓'];
  const fruits2 = ['🍌', '🥝'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  // object의 key값이 동일한 것을 병합할 경우 제일 마지막에 있는게 덮어써져서 나옴.
  const dog1 = { dog: '🐕' };
  const dog2 = { dog: '🐶' };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
  console.clear();
}

/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
  // 💩
  // 이전에 하던 방식 : 함수를 호출할 때 pram값이 없을 경우 
  {
    function printMessage(message) {
      if (message == null) {
        message = 'default message';
      }
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }

  // ✨
  // 인자값 다음에 기본적으로 원하는 초기값을 지정하게 되면
  // 인자가 전달되지 않았을 때 초기값을 사용하게 된다.
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }
  console.clear();
}

/**
 * Ternary Operator(삼항 연산자)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
{
  const isCat = true;
  // 💩
  {
    let component;
    if (isCat) {
      component = '😸';
    } else {
      component = '🐶';
    }
    console.log(component);
  }

  // ✨
  {
    const component = isCat ? '😸' : '🐶';
    console.log(component);
    console.log(isCat ? '😸' : '🐶');
  }
  console.clear();
}

/**
 * Template Literals(문자열 리터럴)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
  const weather = '🌤';
  const temparature = '16°C';

  // 💩
  console.log(
    'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
  );

  // ✨
  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);

}