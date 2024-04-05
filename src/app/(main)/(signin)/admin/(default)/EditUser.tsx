// const EditAdmin = () =>{
//     return(
//         <>
//         {editUser && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
//             <h2 className="text-lg font-bold mb-4">Edit User</h2>
//             <form onSubmit={handleEditFormSubmit}>
//               <input type="text" name="name" value={editFormData.name} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2" />
//               <input type="text" name="email" value={editFormData.email} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2" />
//               <select name="department" value={editFormData.department} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2">
//                 <option value="Select Option">Select Option</option>
//                 <option value="CSE">CSE</option>
//                 <option value="ECE">ECE</option>
//                 <option value="EEE">EEE</option>
//                 <option value="IT">IT</option>
//                 <option value="MECH">MECH</option>
//                 <option value="CCE">CCE</option>
//                 <option value="AIML">AIML</option>
//                 <option value="AIDS">AIDS</option>
//               </select>
//               <select name="designation" value={editFormData.designation} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2">
//                 <option value="Select Option">Select Option</option>
//                 <option value="Assistant Professor">Assistant Professor</option>
//                 <option value="Associate Professor">Associate Professor</option>
//                 <option value="Professor">Professor</option>
//               </select>
//               <select name="role" value={editFormData.role} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2">
//                 <option value="Select Option">Select Option</option>
//                 <option value="Anonymous">Anonymous</option>
//                 <option value="Admin">Admin</option>
//                 <option value="HOD">HOD</option>
//                 <option value="Staff">Staff</option>
//               </select>
//               <select name="status" value={editFormData.status} onChange={handleEditFormChange} className="block w-full border border-gray-300 rounded px-2 py-1 mb-2">
//                 <option value="Active" style={{ color: 'green' }}>Active</option>
//                 <option value="Suspended" style={{ color: 'red' }}>Suspended</option>
//               </select>
//               <div className="flex justify-center">
//                 <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Save</button>
//                 <button onClick={() => setEditUser(null)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded">Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//         </>
//     )
// }

// export default EditAdmin;