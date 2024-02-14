import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId = "8d7e2734-cffa-48d7-a2bc-c0c0942fa28a"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage;