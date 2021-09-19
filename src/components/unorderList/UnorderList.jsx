import style from './index.module.css';
const UnorderList = (props) => {
    const lists = props.lists && props.lists.map(
        (list, index)=>(
            <div className={style.card} key={index}>
                <li className={list.isStrike ? style.strike : ""} key={index}>
                    <div key={index} className={list.overdue? `${style.list} ${style.color}`: style.list}>
                            <input type="checkbox" defaultChecked={list.isStrike}  onChange={() => (props.strikeHandler(index))} />
                            <h2>{list.todoInput}</h2>       
                            <h3 className={style.items}>Due: {list.todoDate}</h3>
                            <button className={style.del} onClick={() => (props.doneHandler(index))}>Delete</button>
                            <h4>{list.overdue? "Due date is passed":""}</h4>
                    </div>
                </li>
            </div>
            
        
        ));

    return <ol><h2>TODO- LIST</h2>{lists}</ol>
};

export default UnorderList;