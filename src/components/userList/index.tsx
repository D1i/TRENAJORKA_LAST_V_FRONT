import { ParagraphUser } from '../paragraphUser';

type props = {
    list: Array<{
        firstName: string,
        secoundName: string,
        data: any
    }>
}

export const UserList = (props: props) => {
    return (<div className="style-container">{props.list.map(i => <ParagraphUser firstName={i.firstName} secoundName={i.secoundName} />)}</div>
    )
}
