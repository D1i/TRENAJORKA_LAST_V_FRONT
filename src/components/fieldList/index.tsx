import { Input } from '../input';
import './style.css'

type props = {
    exercisesListObj: Array<{
        fieldName: string,
        fieldContent: string
    }>
}

export const ExercisesList = (props: props) => {
    return (<div className="style-container">{[...props.exercisesListObj.map(i => <Input fieldName={i.fieldName} fieldContent={i.fieldContent} id={0} deleteInput={() =>{}} />),
    <button className="style-control-btn">ДОБАВИТЬ ПОЛЕ</button>,
    <button className="style-control-btn">СОХРАНИТЬ</button>]}</div>
    )
}

