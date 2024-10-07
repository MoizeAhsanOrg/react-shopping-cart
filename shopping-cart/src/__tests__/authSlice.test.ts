import authReducer, { login, logout } from '../redux/slices/authSlice';
import { User } from '../types/User';

describe('authSlice', () => {
  const user: User = {
    username: 'test', password: 'test', role: 'customer',
    name: '',
    email: '',
    history: []
  };

  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual({ user: null });
  });

  it('should handle login', () => {
    const actual = authReducer({ user: null }, login(user));
    expect(actual.user).toEqual(user);
  });

  it('should handle logout', () => {
    const actual = authReducer({ user }, logout());
    expect(actual.user).toBeNull();
  });
});
