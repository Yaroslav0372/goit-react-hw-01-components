import user from '../data/user.json';
import { Profile } from 'components/profile/Profile';

import data from '../data/data.json';
import { Statistics } from 'components/statistics/Statistics';

import friends from '../data/friends.json';
import { FriendList } from 'components/friend-list/FriendList';

import transactions from '../data/transactions.json';
import { TransactionHistory } from 'components/transaction-history/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
