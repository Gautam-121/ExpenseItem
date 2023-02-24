import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

/*
function ExpenseItem(){
    return(
        <div className='expense-item'>
            <div>March 12th 2021 </div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$200</div>
            </div>
        </div>
    )
}
*/

function ExpenseItem(props){
    // console.log(props)
    // console.log(props.date.toISOString())

   

    return(
        <div className='expense-item'>
           <ExpenseDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem