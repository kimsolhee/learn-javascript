/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
 {
  const person1 = {
    name: 'Ellie',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob',
      },
    },
  };
  const person2 = {
    name: 'Bob',
  };

  // 💩💩💩💩💩💩
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    //printManager(person2);
  }

  // 💩💩💩
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // 💩
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  // ✨
  {
    function printManager(person) {
      // person에 job이 null이 아니고, person.job에 manager가 null이 아니면 person.job.manager의 name을 출력해조라.
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
  console.clear();
}

/**
 * Nullish Coalescing Operator (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */
{
  // Logical OR operator
  // false: false, '', 0, null, undefined
  {
    const name = 'Ellie';
    // or은 앞에 있는 값이 false일 때만 뒤에 있는 값이 실행되는 형태
    const userName = name || 'Guest';
    console.log(userName);
  }

  {
    const name = null;
    // or은 앞에 있는 값이 false일 때만 뒤에 있는 값이 실행되는 형태
    const userName = name || 'Guest';
    console.log(userName);
  }
  
  // 💩
  // name에 아무것도 지정되지 않은 경우에 'Guest'를 할당하고 싶은데 문자열 비여있는 경우에도('') 문자가 없다고 간주되어 'Guest'가 할당된다.
  {
    const name = '';
    const userName = name || 'Guest';
    console.log(userName);

    // 숫저가 지정되어있는 상태인대도 'undefined'가 지정됨(숫자 0은 false로 간주됨)
    const num = 0;
    const message = num || 'undefined';
    console.log(message);
    console.log("========================================================================");
  }

  // ✨
  // 정상 출력
  {
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message);
  }
}