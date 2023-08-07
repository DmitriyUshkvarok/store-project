const getStatus = (state) => state.status.isPending;

const orderStatusSelector = {
  getStatus,
};

export default orderStatusSelector;
