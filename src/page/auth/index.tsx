import './style.css'

export const AuthPage = () => {
    return (
        <div onClick={() => {window.location.href = "/usersList"}} className="style-auth-page-container"><span>АВТОРИЗУЙТЕСЬ ЧЕРЕЗ ВК: </span><button className="style-icon-vk"></button></div>
    )
}