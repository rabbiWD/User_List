import React, { useState } from "react";
import { useAddUserMutation, useDeleteUserMutation, useEditUserMutation, useGetUsersQuery } from "../redux/api/usersApi";


const UserList = () => {
 const {data: users = []} = useGetUsersQuery();

 const [addUser] = useAddUserMutation();
 const [editUser] = useEditUserMutation();
 const [deleteUser] = useDeleteUserMutation();

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const openAddModal = () => {
    setName("");
    setEmail("");
    setEditId(null);
    setModalOpen(true);
  }

  const openEditModal = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
    setModalOpen(true);
  }

  const handleSubmit = async () => {
    if (!name || !email) return alert("Name and Email required"); // toast er kaj korte hbe

    if(editId){
      await editUser({ id: editId, name, email });
    } else {
      await addUser({ name, email });
    }

    setModalOpen(false);
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <button 
        onClick={openAddModal} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add User
      </button>

      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="flex justify-between items-center p-2 border rounded ">
            <span>{user.name} ({user.email})</span>
            <div>

              <button 
                onClick={() => openEditModal(user)}
                className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>

              <button 
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">{editId ? "Edit User" : "Add User"}</h3>
            <input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={e => setName(e.target.value)}
              className="border p-2 w-full mb-3 rounded"
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              className="border p-2 w-full mb-3 rounded"
            />
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded bg-gray-300"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit}
                className="px-4 py-2 rounded bg-blue-500 text-white"
              >
                {editId ? "Save Changes" : "Add User"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;