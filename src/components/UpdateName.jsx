import { useLoaderData, useNavigate } from "react-router";
import { toast } from "sonner";

const UpdateName = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  console.log(data);

  const updateName = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    console.log(name);

    fetch(`http://localhost:5000/seminar/${data._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name }),
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Update Successfully");
        navigate("/users");
      }
    });
  };

  return (
    <form
      onSubmit={updateName}
      className="flex justify-center items-center h-screen"
    >
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
