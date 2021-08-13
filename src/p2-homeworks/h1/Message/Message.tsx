import React from 'react';
import s from './Message.module.css';

type messageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message(props: messageType) {
    return (
        <div className={s.messageWrapper}>
            <div className={s.messageItem}>
                <img className={s.avatar} src={props.avatar} alt="avatar"/>
                <div className={s.messageContent}>
                    <div>
                        <div className={s.name}>{props.name}</div>
                        <div className={s.text}>{props.message}</div>
                    </div>
                    <span className={s.time}>{props.time}</span>
                </div>
            </div>
        </div>
    );
};


export default Message




