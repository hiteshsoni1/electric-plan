import React, { useState } from "react";
import styled from "styled-components";
import Card from '../components/Card';
import { FlexColumn } from "../components/common/styled";
import { API_URL, TOTAL_PLAN } from "../constant";
import LoaderList from "../components/Loaders/LoaderList";
import { useApi } from "../hooks/useApi";
import Modal from "../components/common/Modal";
const Container = styled(FlexColumn)`
  align-items: inherit;
  padding: 20px;
`
const Cards = styled.div`
  margin-top: 32px;
`;
const PlanListing = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModaTitle] = useState('');
  const [data, loading] = useApi(API_URL.ELECTRIC_PLAN);

  const handleModal = (content = '', title = '') => {
    setModalContent(content)
    setModaTitle(title);
  
    if (showModal) {
      setShowModal(false)
    } else {
      setShowModal(true);
    }
  }

  if (loading) {
    return <LoaderList />
  }

  return (
    <Container>
      <div>{`${TOTAL_PLAN}: ${data.length}`}</div>
      <Cards>
        {data.map((element) => (
          <Card key={element.id} {...element} handleModal={handleModal} />
        ))}
      </Cards>
      {showModal && (
        <Modal
          onClose={() => handleModal()}
          title={modalTitle}
          content={modalContent}
        />
      )}
    </Container>
  );
};

export default PlanListing;
