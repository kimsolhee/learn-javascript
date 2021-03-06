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

  // ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    //printManager(person2);
  }

  // ๐ฉ๐ฉ๐ฉ
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

  // ๐ฉ
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  // โจ
  {
    function printManager(person) {
      // person์ job์ด null์ด ์๋๊ณ , person.job์ manager๊ฐ null์ด ์๋๋ฉด person.job.manager์ name์ ์ถ๋ ฅํด์กฐ๋ผ.
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
    // or์ ์์ ์๋ ๊ฐ์ด false์ผ ๋๋ง ๋ค์ ์๋ ๊ฐ์ด ์คํ๋๋ ํํ
    const userName = name || 'Guest';
    console.log(userName);
  }

  {
    const name = null;
    // or์ ์์ ์๋ ๊ฐ์ด false์ผ ๋๋ง ๋ค์ ์๋ ๊ฐ์ด ์คํ๋๋ ํํ
    const userName = name || 'Guest';
    console.log(userName);
  }
  
  // ๐ฉ
  // name์ ์๋ฌด๊ฒ๋ ์ง์ ๋์ง ์์ ๊ฒฝ์ฐ์ 'Guest'๋ฅผ ํ ๋นํ๊ณ  ์ถ์๋ฐ ๋ฌธ์์ด ๋น์ฌ์๋ ๊ฒฝ์ฐ์๋('') ๋ฌธ์๊ฐ ์๋ค๊ณ  ๊ฐ์ฃผ๋์ด 'Guest'๊ฐ ํ ๋น๋๋ค.
  {
    const name = '';
    const userName = name || 'Guest';
    console.log(userName);

    // ์ซ์ ๊ฐ ์ง์ ๋์ด์๋ ์ํ์ธ๋๋ 'undefined'๊ฐ ์ง์ ๋จ(์ซ์ 0์ false๋ก ๊ฐ์ฃผ๋จ)
    const num = 0;
    const message = num || 'undefined';
    console.log(message);
    console.log("========================================================================");
  }

  // โจ
  // ์ ์ ์ถ๋ ฅ
  {
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message);
  }
}