const TodoInput = (props) => (
    <div>
        <h3>Add Todo:</h3>
        <input type='text' name="todoInput" onChange={props.changeHandler} value={props.value}/>
    </div>
);

export default TodoInput;