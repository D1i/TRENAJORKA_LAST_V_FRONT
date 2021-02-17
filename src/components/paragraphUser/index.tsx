import './style.css'

type Props = {
    firstName: string,
    secoundName: string,
}

export const ParagraphUser = (props: Props) => {

    const handleGoOver = () => {
        window.location.href = "/userProfile"
    }

    return (
        <div>
            <button onClick={handleGoOver} className="style-user-name">{`${props.firstName} ${props.secoundName}`}</button>
        </div>
    )
}