/*
function App(){
    return ( // Block of code
        <div className="app-container">
            <h1>my name is Gauatam</h1>
            <p>Hello I am software Devloper</p>
        </div>
    )
}
*/

/*
function App(){
    return ( 
        <div>
            <SubComponent/>
            <SubComponent></SubComponent>
        </div>
      
    )
}
*/

import Expenses from "./components/Expenses";


function App() {

//   let expenseDate = new Date(2021, 3, 28);
//   let expenseTitle = "School Fees";
//   let expenseAmount = 300;
     
    let expenses = [
        {
            id : 'e1',
            title : 'school fees',
            amount : 250,
            date : new Date(2021 , 5 , 12)
        },
        {
            id : 'e2',
            title : 'Hospital Fees',
            amount : 500,
            date : new Date(2021 , 2 , 22)
        },
        {
            id : 'e3',
            title : 'Ration Fees',
            amount : 750,
            date : new Date(2021 , 4 , 12)
        },
        {
            id : 'e4',
            title : 'House Rent',
            amount : 1000,
            date : new Date(2021 , 9 , 12)
        }
    ]

  return (
    <div>
        <h2>Let's gets Started</h2>
        <Expenses item = {expenses}/>
     
    </div>
  );
}
export default App;
