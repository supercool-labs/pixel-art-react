import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { resetGrid } from '../store/actions/actionCreators';
import Button from './common/Button';

const Reset = ({ resetGridDispatch }) => (
  <ResetButton
    variant="action"
    type="button"
    onClick={resetGridDispatch}
    ariaLabel="Reset painting"
  />
);

const ResetButton = styled(Button)`
  width: 100%;

  &:before {
    font: normal normal normal 14px/1 WebFontIcons;
    content: '\\74';
  }
`;

const mapDispatchToProps = dispatch => ({
  resetGridDispatch: () => dispatch(resetGrid())
});

const ResetContainer = connect(null, mapDispatchToProps)(Reset);
export default ResetContainer;
