import React from "react";
import PropTypes from "prop-types";

import {
  DashBoardSection,
  DashBoardHeaderSection,
  DashBoardGridView,
  Header,
} from "./DashBoardSectionGrid.style";

const DashBoardGridSection = ({ children, ...props }) => {
  const { header, spacing } = props;
  return (
    <DashBoardSection data-testid="dashboard-section">
      <DashBoardHeaderSection data-testid="dashboard-header">
        <Header>{header}</Header>
      </DashBoardHeaderSection>
      <DashBoardGridView
        data-testid="dashboard-grid-section"
        container
        spacing={spacing}
      >
        {children}
      </DashBoardGridView>
    </DashBoardSection>
  );
};

DashBoardGridSection.propTypes = {
  headerElement: PropTypes.string.isRequired,
  gridElement: PropTypes.element.isRequired,
};

export default DashBoardGridSection;
