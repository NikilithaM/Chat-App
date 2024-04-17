import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps= useMultiChatLogic(
        '2d76573a-b903-4cbc-9831-ecd1c42f260d',
        props.user.username,
        props.user.secret);
    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:"100%"}}/>
    </div>
}

export default ChatsPage