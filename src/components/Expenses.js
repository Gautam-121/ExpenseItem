import './Expenses.css'

import ExpenseItem from './ExpenseItem.js'


function Expenses(props){
    return(
        <div className = "expenses">
            <ExpenseItem
                date={props.item[0].date}
                title={props.item[0].title}
                amount={props.item[0].amount}>
            </ExpenseItem>
            <ExpenseItem // ExpenseItem Component isko data pass kiya hai , usiko bolte hai Props , to jha ExpenseItem hai wha props krke ek
                date={props.item[1].date} // Object Create ho jayenga usme ye sb property jo bhi pass kiye hai wo present hoga aur wha hm use
                title={props.item[1].title}// used kr skte hai
                amount={props.item[1].amount}>
            </ExpenseItem>
            <ExpenseItem
                date={props.item[2].date}
                title={props.item[2].title}
                amount={props.item[2].amount}>
            </ExpenseItem>
            <ExpenseItem
                date={props.item[3].date}
                title={props.item[3].title}
                amount={props.item[3].amount}>
            </ExpenseItem>
        </div>
    )
}

export default Expenses