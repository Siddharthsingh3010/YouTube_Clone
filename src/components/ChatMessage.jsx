import React from 'react'
import Avatar from "react-avatar";
const ChatMessage = ({ item }) => {
    return (
        <div className='flex items-center'>
            <div>
                <Avatar
                    src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1687694167.1711843200&semt=ais"
                    size={35}
                    round={true}
                    className=" cursor-pointer"
                />
            </div>
            <div className='flex items-center hover:bg-slate-100 cursor-pointer rounded-md'>
                <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
                <p className='ml-2 py-2 text-sm '>{item.message}</p>
            </div>
        </div>
    )
}

export default ChatMessage