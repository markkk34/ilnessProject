const Messages = (props) =>
{
    let messageElements = props.messages.map(
        message => <div>{message.message}</div>
    );

    return (
        <div className=''>
            <div>message 1</div>
            <div>message 2</div>
            <div>message 3</div>
        </div>
    );
}

export default Messages;