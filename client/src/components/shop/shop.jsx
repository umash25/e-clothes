import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import CollectionPageContainer from '../../pages/collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.action';
import CollectionsOverviewContainer from '../collections-overview/collection-overview.container';

const ShopPage = ({ match, fetchCollectionsStart }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart]);

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}
                component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`}
                component={CollectionPageContainer} />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () =>
        dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);