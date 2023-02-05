import { useState } from 'react'
import './App.css'

function App() {
  const optionMonth = [
    {
      value: '01'
    },
    {
      value: '02'
    },
    {
      value: '03'
    },
    {
      value: '04'
    },
    {
      value: '05'
    },
    {
      value: '06'
    },
    {
      value: '07'
    },
    {
      value: '08'
    },
    {
      value: '09'
    },
    {
      value: '10'
    },
    {
      value: '11'
    },
    {
      value: '12'
    }
  ]

  const options = [
    {
      value: "2023"
    },
    {
      value: "2024"
    },
    {
      value: "2025"
    },
    {
      value: "2026"
    },
    {
      value: "2027"
    },
    {
      value: "2028"
    },
    {
      value: "2029"
    },
    {
      value: "2030"
    },
    {
      value: "2031"
    },
    {
      value: "2032"
    },
    {
      value: "2033"
    },
    {
      value: "2034"
    }
  ];

  const [defaultNumber, setDefaultNumber] = useState(false)
  const [value, setValue] = useState('');
  const [valueName, setValueName] = useState('');
  const [dateExpireYear, setDateExpireYear] = useState('');
  const [dateExpireMonth, setDateExpireMonth] = useState('');
  const [checktrue, Setchecktrue] = useState(true);
  const [ccv, Setccv] = useState('');
  const [date, setDate] = useState(new Date())
  {
    console.log(date.getMonth())
  }

  const AnimationNumberCreditCard = event => {
    const e = event.target.value;
    if (!isNaN(e) && e.length <= 16) {
      setDefaultNumber(!defaultNumber)
      setValue(e);
    }
  };

  const AnimationNameHolder = event => {
    const e = event.target.value
    const letters = /^[A-Za-z]+$/;
    if (e.match(letters) && e.length < 20) {
      setValueName(e)
    }
  }

  const DateExpireYear = e => {
    setDateExpireYear(e.target.value);
  }
  const DateExpireMonth = e => {
    setDateExpireMonth((e.target.value));
  }

  const checkCcv = (e) => {
    if (!isNaN(e.target.value) && e.target.value.length < 4) {
      setDefaultNumber(!defaultNumber)
      Setccv(e.target.value)
    }

  }


  const CheckAll = () => {
    if (ccv == '' || ccv.length < 3) { alert('need to enter a ccv'); Setchecktrue(false); return false; }
    else {
      Setchecktrue(true)
    }
    if (value.length != 16) { alert("Credit Card Number error"); Setchecktrue(false); return false; }
    else {
      Setchecktrue(true)
    }
    if (valueName.length < 5) { alert("Card Holder error"); Setchecktrue(false); return false;  }

     if(dateExpireMonth <= date.getMonth()){alert('your card is expired'); Setchecktrue(false); return false;}

  }

  return (
    <>
      <div className='card'>
        <div className="card">
          <div className="card__front card__part">
            <img className="card__front-square card__square" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6JhEiCykKQy4PjDRbTD8HKVRBONatvInhzWcRUob29j2v0Ian58J_ouGvwdkzPDee7w&usqp=CAU" />
            <img className="card__front-logo card__logo" src="https://png.pngtree.com/png-vector/20190121/ourmid/pngtree-golden-key-golden-key-love-gold-png-image_519713.jpg" />
            <p className="card_numer"> {value ? value : '#### #### #### ####'}</p>
            <div className="card__space-75">
              <span className="card__label">Card holder</span>
              <p className="card__info">{valueName ? valueName : 'John Doe'}</p>
            </div>
            <div className="card__space-25">
              <span className="card__label">Expires</span>
              <p className="card__info">{dateExpireMonth ? dateExpireMonth : '##'}/{dateExpireYear ? dateExpireYear : '##'}</p>
            </div>
          </div>
        </div>
      </div>
      <section className='grid'>
        <span className='grfrtext'>
          <label htmlFor="card-number">Card Number</label>
          <input type="text" value={value} onChange={AnimationNumberCreditCard} />
          <label htmlFor="name-user">Card Holder</label>
          <input type="text" value={valueName} onChange={AnimationNameHolder} name='name-user' />
        </span>
        <label htmlFor="card-number">Experiration Date</label>
        <div className='selct'>
          <select onChange={(e) => DateExpireMonth(e)} className='month' name="month-input">
            <option value={dateExpireMonth}>Month</option>
            {optionMonth.map((option, i) => (
              <option key={i}>{option.value}</option>
            ))}
          </select>
          <select onChange={(e) => DateExpireYear(e)} className='years' name="years-input">
            <option value={dateExpireYear}>Year</option>
            {options.map((option, i) => (
              <option key={i}>{option.value}</option>
            ))}
          </select>
          <input value={ccv} onChange={(e) => checkCcv(e)} className='cv' type="text" name='cv' placeholder='CVV' />
          <button style={{ backgroundColor: `${checktrue ? ' #2364D2' : 'red'}` }} onClick={CheckAll}>Submit</button>
        </div>
      </section>
    </>
  )
}

export default App
