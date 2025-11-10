import { FiTrash2 } from "react-icons/fi";
import { useAuth } from "../custom-hooks/useAuth";

export default function AdminPage() {
const {users, refetch, loading, error, deleteUser} = useAuth()

const handleDelete = async(id:any) =>{
   await deleteUser(id)
    await refetch()
}

  if (loading)
    return (
      <div className="text-2xl font-bold w-full h-screen flex justify-center items-center">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center mt-10 text-xl">{error}</div>
    );

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Registered Users
      </h1>

      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user: any) => (
            <div
              key={user._id}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 relative"
            >
              <h2 className="text-xl font-semibold text-teal-600 mb-1">
                {user.email || "Unnamed User"}
              </h2>
              <p className="text-gray-700">{user.email}</p>
              <p className="text-gray-500 text-sm mt-1">
                User ID: {user._id.slice(0, 8)}...
              </p>

              <button
                onClick={() => handleDelete(user._id)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-600"
                title="Delete User"
              >
                <FiTrash2 size={22} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
