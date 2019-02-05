import React from 'react';
import PropTypes from 'prop-types';

import List from 'styled-atoms/List';
import ListItem from 'styled-atoms/ListItem';
// import LoadingIndicator from 'styled-atoms/LoadingIndicator';
import LoadingIndicator from 'styled-atoms/Spinner';
import RepoListItem from 'components/RepoListItem';

/**
 * @return {null}
 */
function ReposList({ loading, error, repos }) {
    if (loading) {
        return <List component={LoadingIndicator} />;
    }

    if (error !== false) {
        const ErrorComponent = () => <ListItem item="Something went wrong, please try again!" />;
        return <List component={ErrorComponent} />;
    }

    if (repos !== false) {
        return <List items={repos} component={RepoListItem} />;
    }

    return null;
}

ReposList.propTypes = {
    error: PropTypes.any,
    loading: PropTypes.bool,
    repos: PropTypes.any,
};

export default ReposList;
