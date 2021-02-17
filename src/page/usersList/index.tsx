import { UserList } from '../../components/userList';

export const UsersListPage = () => {
    return (
        <div>
            <UserList list={[
                {firstName: "Максим", secoundName: "Калин", data: {}},
                {firstName: "TEST1", secoundName: "TEST1-", data: {}},
                {firstName: "TEST2", secoundName: "TEST2-", data: {}},
                {firstName: "TEST3", secoundName: "TEST3-", data: {}},
                {firstName: "TEST4", secoundName: "TEST4-", data: {}},
                {firstName: "TEST5", secoundName: "TEST5-", data: {}},
            ]}/>
        </div>
    )
}