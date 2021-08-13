import React from 'react'
import s from './HW1.module.css';
import Message from "./Message/Message";
import AlternativeMessage from "./AlternativeMessage/AlternativeMessage";

const messageData = {
    avatar: 'https://www.meme-arsenal.com/memes/21f0bcad115ca25e3963258083e66b19.jpg',
    name: 'Игнат',
    message: 'Привет, самурай! Как твоё первое домашнее задание?',
    time: '12:00',

    avatar1: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name1: 'Наташа',
    message1: 'Привет, сэнсэй! Вроде все хорошо.',
    time1: '12:02',

    avatar2: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name2: 'Наташа',
    message2: 'Хотя есть пару вопрос. Могу отправить на код-ревью?',
    time2: '12:03',

    avatar3: 'https://www.meme-arsenal.com/memes/21f0bcad115ca25e3963258083e66b19.jpg',
    name3: 'Игнат',
    message3: 'Да, скидывай git репозиторий',
    time3: '12:05',

    avatar4: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name4: 'Наташа',
    message4: 'https://github.com/nborovik',
    time4: '12:10',

}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <div className={s.messages}>
                <div className={s.wrapper_content}>
                    {/*should work (должно работать)*/}

                    <Message
                        avatar={messageData.avatar}
                        name={messageData.name}
                        message={messageData.message}
                        time={messageData.time}
                    />

                    <AlternativeMessage
                        avatar1={messageData.avatar1}
                        name1={messageData.name1}
                        message1={messageData.message1}
                        time1={messageData.time1}
                    />
                    <AlternativeMessage
                        avatar1={messageData.avatar2}
                        name1={messageData.name2}
                        message1={messageData.message2}
                        time1={messageData.time2}
                    />

                    <Message
                        avatar={messageData.avatar3}
                        name={messageData.name3}
                        message={messageData.message3}
                        time={messageData.time3}
                    />

                    <AlternativeMessage
                        avatar1={messageData.avatar4}
                        name1={messageData.name4}
                        message1={messageData.message4}
                        time1={messageData.time4}
                    />

                </div>
                <hr/>

            </div>

        </div>
    )
}

export default HW1
