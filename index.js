import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// lodash
import _includes from 'lodash/includes';

const useModalsBackButtonNavigation = ({ onClose, hash, isModalOpen }) => {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (isModalOpen) {
      history.push({
        search: `${location.search}&${hash}`
      });
    } else {
      const search = location.search.replace(`&${hash}`, '');
      history.replace({
        search
      });
    }
  }, [isModalOpen]);

  // run close function when hash change
  useEffect(() => {
    closeModalOnHashChange({ location, hash, onClose, isModalOpen });
  }, [location.search]);
};

/**
 * close modal when hash change
 * @param {Object} location
 * @param {String} hash
 * @param {Func} onClose
 * @param {Boolean} isModalOpen
 */
const closeModalOnHashChange = ({ location, hash, onClose, isModalOpen }) => {
  const currentHash = location.search;
  if (
    (!currentHash || (hash && !_includes(currentHash, hash))) &&
    isModalOpen
  ) {
    onClose(false);
  }
};

export default useModalsBackButtonNavigation;