import { useLoaderData } from "react-router";

const UpdateName = () => {
  const data = useLoaderData();

  console.log(data);

  const updateName = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    console.log(name);

    fetch(`http://localhost:5000/seminar/${data._id}`,{
      method:"PATCH",
      headers:{
        "content-type": "application/json",
     },
     body:JSON.stringify({name})
    })

  };

  return (
    <form onSubmit={updateName} className="flex justify-center items-center h-screen">
      <input
        defaultValue={data.name}
        name="name"
        className="border"
        type="text"
        placeholder="Update name"
        required
      />

      <button className="btn btn-success text-white ml-2" type="submit">
        Update
      </button>
    </form>
  );
};

export default UpdateName;
