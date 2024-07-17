import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setMessgae } from '../utils/chatSlice'
import { generateRandomMessage, generateRandomName } from '../utils/nameList'
const LiveChat = () => {

    const message = useSelector((store) => store.chat.message);
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(setMessgae({ name: generateRandomName(), message: generateRandomMessage(1, 1) }))
        }, 1000)

        return (() => {
            clearInterval(timer)
        })
    }, [])
    return (
        <div>
            <div>
                {
                    message.map((item, idx) => {
                        return (
                            <ChatMessage key={idx} item={item} />
                        )
                    })
                }


            </div>
        </div>
    )
}

export default LiveChat