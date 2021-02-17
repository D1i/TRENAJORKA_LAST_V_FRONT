import { FormEvent, useState } from 'react';
import './style.css'

type PropTypes = {
    id: number,
    deleteInput: (id: number) => void,
    fieldName?: string,
    fieldContent?: string
}

export const Input = (props: PropTypes) => {
    const [fieldName, setFieldName] = useState(props?.fieldName || '');
    const [fieldContent, setFieldContent] = useState(props?.fieldName || '');
    const [isSetNameFieldOpen, setIsSetNameFieldOpen] = useState(false)

    const handleChangeFieldName = (e: FormEvent<HTMLInputElement>) => {
        setFieldName(e.currentTarget.value);
    }

    const closeFieldName = () => {
        setIsSetNameFieldOpen(false);
    }

    const handleChangeFieldContent = (e: FormEvent<HTMLInputElement>) => {
        setFieldContent(e.currentTarget.value);
    }

    const handleClear = () => {
        props.deleteInput(props.id);
        setFieldContent('')
        closeFieldName();
    }

    const toogleFieldNameOpenState = () => {
        setIsSetNameFieldOpen(!isSetNameFieldOpen)
    }

    return (
        <div className="style-container">
            <input
                style={{display: isSetNameFieldOpen ? 'block' : 'none' }}
                onBlur={toogleFieldNameOpenState}
                className="style-setFieldName"
                type="text" value={fieldName}
                onChange={handleChangeFieldName} />

            <div className="style-field-container">

            <div className="style-containerName" onClick=
                {toogleFieldNameOpenState}>{fieldName}
            </div>

                <input
                    className="style-fieldContent"
                    type="text" value={fieldContent}
                    onChange={handleChangeFieldContent}
                    onClick={closeFieldName}/>
                <button
                    className="style-clearBtn"
                onClick={handleClear}>X</button>

            </div>
        </div>
    )
}