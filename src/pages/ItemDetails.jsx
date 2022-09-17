import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

//const Items = styled.div``;
const Image = styled.img`
  width: 90%;
  /* object-fit: cover;  */
  height: 100%;
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 20px;
  height: 300px;
`;

const Details = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;
const Address = styled.div``;
const Contact = styled.div``;
const Nearby = styled.div`
  background-color: #ffff;
  width: 50%;
  padding: 20px;
  margin-right: 80px;

  @media (max-width: 700px) {
    width: 100%;
    align-self: center;
    padding: 10px;
    margin-right: 0px;
  }
`;
const AddressWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 700px) {
    width: 100%;
    align-self: center;
    padding: 10px;
    margin-right: 0px;
  }
`;
const Places = styled.div`
  background-color: #f8f8fa;
  padding: 5px 20px;
  margin-bottom: 5px;
`;

function ItemDetails() {
  const params = useParams();
  const [item, setItem] = React.useState();

  const fetchData = async () => {
    const response = await fetch(
      `https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f`
    );
    const data = await response.json();

    const results = await data.filter((item) => {
      return item.id === params.companyId;
    });
    setItem(results[0]);
  };

  useEffect(() => {
    fetchData();
  }, [params]);
  // console.log("results: ", params);
  return (
    <>
      {item && (
        <>
          <ImageWrapper>
            <Image src={item.image} alt="...." />
          </ImageWrapper>
          <Details>
            <AddressWrapper>
              <Address>
                <h2> Address</h2>
                <p> {item.address.street}</p>
                <p>
                  {item.address.city} <span>{item.address.zip}</span>
                </p>
              </Address>
              <Contact>
                <h2> Contact</h2>
                <p> {item.phone} </p>
                <p> {item.email}</p>
              </Contact>
            </AddressWrapper>

            <Nearby>
              <h2> Nearby Places</h2>
              <Places>
                
                <p>
                  {item.address.city}
                  <span style={{ marginLeft: "20px" }}>{item.description}</span>
                </p>
              </Places>
              <Places>
                <p>
                  
                  {item.address.city}
                  <span style={{ marginLeft: "20px" }}>{item.description}</span>
                </p>
              </Places>
              <Places>
                <p>
                  
                  {item.address.city}
                  <span style={{ marginLeft: "20px" }}>{item.description}</span>
                </p>
              </Places>
            </Nearby>
          </Details>
        </>
      )}
    </>
  );
}

export default ItemDetails;
