import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";
import React from "react";

const PhotoDetailsModal = ({ params: { id, lang } }) => {
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />;
    </Modal>
  );
};

export default PhotoDetailsModal;
