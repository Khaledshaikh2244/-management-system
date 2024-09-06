import React,{useEffect,useState} from 'react'
import { getUsers  } from '../../services/api'
import { deleteUser } from '../../services/api'

export const UserManagement = () => {
    const [users, setUsers] = ([]);

    useEffect(() =>{
        const fetchUsers = async () => {
            try {
                const response = await getUsers();
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    },[]);

    // here we wil handel deleteUSers
    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            // setting data after applying filter
            setUsers(users.filter(user => user. _id !==id));
        } catch (error) {
            console.log(error);
        }
    }

    return (

    <div className='p-4'>
        <h2 className='text-2xl font-bold mb-4'>User Mangement</h2>
        <ul className='space-y-4'>
            {users.map(user => (
                <li key={user._id} className='border p-4 rounded-md flex justify-between items-center'>
                    <div>
                        <h3 className='text-xl font-semibold'>{user.username}</h3>
                        <p>Email : {user.email}</p>
                    </div>
                    <button onClick={() =>handleDelete(user._id)}
                        className='bg-red-800 text-white py-1  px-3 rounded-md'>
                            Delete
                    </button>
                </li>
            ))}
        </ul>
        
    </div>
  )
}
export default UserManagement;