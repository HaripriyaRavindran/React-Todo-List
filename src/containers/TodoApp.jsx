import React, { Component } from 'react';
import UnorderList from './../components/unorderList/UnorderList';
import TodoInput from './../components/todoInput/TodoInput';
import AddTodo from './../components/addTodo/AddTodo';
import AddDate from './../components/addDate/AddDate';
import Login from "./../containers/Login";

class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoList: [
                {todoInput: "Feed the dog", isStrike: false, todoDate: "2021-04-25"},
                {todoInput: "Wash clothes", isStrike: false, todoDate: "2021-04-27"}
            ],
            todoInput: '',
            todoDate: '',
            error: null,
            todaysDate: ''
        }
    }

    componentDidMount(){
        const todayDate = new Date();
        const todayMonth = todayDate.getMonth() + 1;
        const todayDay = todayDate.getDate();
        const todayYear = todayDate.getFullYear();
        const todayDateText = todayYear + "-" + todayMonth + "-" +  todayDay;
        console.log(todayDateText);
        this.setState({
            todaysDate:todayDateText,
        })
        const {todoList} = this.state;
        for (let i = 0; i < todoList.length; i++) {
            const overdue = todoList[i].todoDate;
            if (Date.parse(overdue)<Date.parse(todayDateText)) {
                todoList[i].overdue = true;
            }
            else{
                todoList[i].overdue = false;
            }
        }
    }

    changeHandler = (event) => { 

        const name = event.target.name;
        const Inputvalue =event.target.value;
        
        if(name === "todoDate"){      
            const {todaysDate} = this.state;
            let inputToDate = Date.parse(Inputvalue);
            let todayToDate = Date.parse(todaysDate);
            if (inputToDate < todayToDate) {
                const error = "Please select valid date";
                this.setState({
                    error:error,
                })
            }
            else{
                const error = null;
                this.setState({
                    [name]:Inputvalue,
                    error:error,
                })
            } 
        }
        else{
            this.setState({
                [name]:Inputvalue,
            })
        }
            
    };

    clickHandler = () => {
        const {todoList, todoInput, todoDate} = this.state;
        console.log(todoList);
        if(todoInput){
            const todo={todoInput, isStrike:false, todoDate};
            todoList.push(todo);
            this.setState({
                todoList,
                todoInput: '',
                todoDate:''
            });
        }
    };

    removeListItem = (listIndex) => {
        const { todoList } = this.state;
        if(listIndex>-1){
            todoList.splice(listIndex, 1);
            this.setState({
                todoList
            });
        }
    }
    strike = (listIndex) =>{
        if(listIndex>-1){
            const { todoList } = this.state;
            todoList[listIndex].isStrike= !todoList[listIndex].isStrike;
            this.setState({
                todoList,
            });
        }
    }


    render() {
        
        const {todoList, todoInput, todoDate, error} = this.state;
        return (
            <div>
                <TodoInput
                    value={todoInput}
                    changeHandler={this.changeHandler}/>
                <AddDate
                    value={todoDate}
                    changeHandler={this.changeHandler}/>
                {error && <h4>{error}</h4>}
                {!error &&<AddTodo 
                    clickHandler={this.clickHandler}/>}
                    <hr />
                <UnorderList 
                    lists={todoList}
                    doneHandler={this.removeListItem}
                    strikeHandler={this.strike}            
                />           
                    
            </div>
        );
    }
}

export default TodoApp;