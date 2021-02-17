import './style.css';

type Props = {
    firstName: string,
    secoundName: string
}

export const Header = (props: Props) => {
    return (
        <div>
            <div className="style-user-name-text">{`${props.firstName} ${props.secoundName}`}</div>
            <button className="style-btn-back"></button>
            <button className="style-btn-exit"></button>
        </div>
    )
}