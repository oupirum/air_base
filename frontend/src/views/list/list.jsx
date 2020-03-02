import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

export const List = React.memo((props) => {
	return (
		<InfiniteScroll
			loadMore={props.loadMore}
			hasMore={props.hasMore}
			loader={<div>Loading...</div>}
			useWindow={true}
			initialLoad={false}
		>
			{props.children}
		</InfiniteScroll>
	);
});
