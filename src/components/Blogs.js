import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBBtn,
  MDBIcon
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Badge from "./Badge";

const Blogs = ({
  title,
  category,
  description,
  id,
  imageUrl,
  excerpt,
  handleDelete,
}) => {
  return (
    <MDBCard
  className="h-100 shadow-sm border-0 blog-card"
  style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
>
      <MDBCardImage
        src={imageUrl}
        alt={title}
        position="top"
        className="img-fluid"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <MDBCardBody className="d-flex flex-column justify-content-between">
        <MDBCardTitle className="fw-bold blog-title">
          {title}
        </MDBCardTitle>

        <MDBCardText className="text-muted blog-description">
          {excerpt ? excerpt(description) : description}
        </MDBCardText>

        <Link to={`/blog/${id}`} className="read-more-btn">Read More</Link>

        <div className="mt-2">
          <Badge>{category}</Badge>
        </div>

        {/* ✅ Icons */}
        <div className="icon-bar mt-3">
          <MDBBtn
            tag="a"
            color="none"
            title="Delete Blog"
            onClick={() => handleDelete?.(id)}
          >
            <MDBIcon fas icon="trash" size="lg" style={{ color: "#dc2626" }} />
          </MDBBtn>

          <Link to={`/editBlog/${id}`} title="Edit Blog">
            <MDBIcon fas icon="edit" size="lg" style={{ color: "#3b82f6" }} />
          </Link>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Blogs;
