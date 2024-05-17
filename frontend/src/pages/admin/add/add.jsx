// import React, { useContext } from "react";
// import { Helmet } from "react-helmet";
// import MainContext from "../../../context/context";

// const Add = () => {
//   const { data, setdata } = useContext(MainContext);
//   return (
//     <>
//       <Helmet>
//         <title>Add</title>
//       </Helmet>
//       <div>Add page</div>
//     </>
//   );
// };

// export default Add;

import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import axios from "axios";
import { useFormik } from "formik";

const Add = () => {
  const { data, setdata } = useContext(MainContext);
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      price: "",
      description: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:8080/product", {
          "title": values.title,
          "image": values.image,
          "price": values.price,
          "description": values.description,
        })
        .then((resp) => {
          console.log(resp.data);
        });
    },
  });
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="image">First Name</label>
        <input
          id="image"
          placeholder="Image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.errors.image ? <div>{formik.errors.image}</div> : null}

        <label htmlFor="lastName">Title</label>
        <input
          id="title"
          placeholder="Title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title ? <div>{formik.errors.title}</div> : null}

        <label htmlFor="description">Description</label>
        <input
          id="description"
          placeholder="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}

        <label htmlFor="price">Price</label>
        <input
          id="price"
          placeholder="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.errors.price ? <div>{formik.errors.price}</div> : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Add;
