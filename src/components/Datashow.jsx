import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Datashow() {
  const { data, loading } = useContext(DataContext);

  if (loading) {
    return (
      <div className="text-center text-gray-600 mt-10 text-lg font-medium">
        Loading...
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center text-red-500 mt-10 text-lg font-semibold">
        No data available
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8 font-serif">
        📝 Blog Posts
      </h1>


      <div className="w-full bg-gray-100 px-4 py-8">
  <div className="bg-white p-8 rounded-xl shadow-md w-full mb-5">
    <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center font-serif">
      📝 Add New Post
    </h2>

    <form className="">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter post title"
        />
      </div>

      <div>
        <label htmlFor="body" className="mt-5 block text-sm font-medium text-gray-700 mb-1">
          Body
        </label>
        <textarea
          id="body"
          rows="4"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Write your post content..."
        ></textarea>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition duration-200 text-lg"
        >
          ➕ Add Post
        </button>
      </div>
    </form>
  </div>
</div>



      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
          >
            <p className="text-sm text-gray-400 mb-1">ID: {item.id}</p>
            <h2 className="text-lg font-semibold text-blue-700 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700 text-sm">{item.body}</p>
            <div className="flex justify-center items-center mt-8">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mx-5">
                    Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                    Delete
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Datashow;
