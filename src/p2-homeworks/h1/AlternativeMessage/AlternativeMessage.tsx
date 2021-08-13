import React from 'react'
import s from './AlternativeMessage.module.css'

type messageType = {
    avatar1: string,
    name1: string,
    message1: string,
    time1: string,
}

function AlternativeMessage(props: messageType) {
    return (
        <div className={s.messageWrapper}>
            <div className={s.messageItem}>
                <div className={s.messageContent}>
                    <div>
                        <div className={s.name}>{props.name1}</div>
                        <div className={s.text}>{props.message1}</div>
                    </div>
                    <span className={s.time}>{props.time1}</span>
                </div>
                <img className={s.avatar} src={props.avatar1} alt="avatar"/>
            </div>
        </div>
    )
}

export default AlternativeMessage
