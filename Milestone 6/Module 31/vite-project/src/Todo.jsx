export default function ToDo ({task, isDone}) {


        if(isDone === true){
    
            return <p>Task name:{task}</p>
        }
        return <p>Task name: {task}</p>
        
        
}