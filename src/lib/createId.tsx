let id = JSON.parse(window.localStorage.getItem('_id') || '0');
const createId = () => {
  id += 1;
  window.localStorage.setItem('_id', JSON.stringify(id));
  return id;
};
export default createId;