import style from './index.module.css';
const AddTodo = (props) => (
    <button className={style.btn}
        onClick={props.clickHandler}>
        Add Todo
    </button>
);

export default AddTodo;

