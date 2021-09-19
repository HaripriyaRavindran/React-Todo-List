const AddDate = (props) => (
    <div>
        <h3>Add completion date:</h3>
        <input type='date' name="todoDate" onChange={props.changeHandler} value={props.value}/>
    </div>
);

export default AddDate;

