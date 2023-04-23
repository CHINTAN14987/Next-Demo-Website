import React from "react";
import Button from "../../../components/Button/Button";
import styles from "../../../styles/CompanyDescription.module.scss";

const CompanyDescription = () => {
  return (
    <div className={styles.container}>
      <h3>Who We are</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <Button />
    </div>
  );
};

export default CompanyDescription;
