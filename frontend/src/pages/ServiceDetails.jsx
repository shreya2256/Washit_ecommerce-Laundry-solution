import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();

  // For hardcoded demo, just show the id
  return (
    <div style={{ padding: 40 }}>
      <h1>Service Details Page</h1>
      <p>Service ID: {id}</p>
      <p>This is a placeholder page. Navigation works!</p>
    </div>
  );
};

export default ServiceDetails;