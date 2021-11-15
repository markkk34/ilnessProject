const Messages = (props) =>
{
    let messageElements = props.messages.map(
        message => <div>{message.message}</div>
    );

    return (
        <div className=''>
            {messageElements}
        </div>
    );
}

export default Messages;