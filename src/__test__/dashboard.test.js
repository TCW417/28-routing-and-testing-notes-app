import React from 'react';
import {
  configure, mount, shallow, 
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import localStorage from 'jest-localstorage-mock';
import Dashboard from '../components/dashboard/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  let mountedDashboard;
  beforeEach(() => {
    // "mount" will actually mount the component directly to the DOM even though we don't see it
    mountedDashboard = mount(<Dashboard />);
    localStorage.__STORE__ = {};
  });
  afterEach(() => {
    // after each test, we take the component out of the DOM to complete our setup/teardown test process
    mountedDashboard.unmount();
  });

  test('Simple test for initial state', () => {
    expect(mountedDashboard.state('allNotes')).toEqual([]);
  });

  test('Adding a new note to the state', () => {
    const mockNotes = [{
      title: 'fake', content: 'A fake note', _id: '1234', createdOn: new Date(),
    }];
    mountedDashboard.setState({ allNotes: mockNotes }, () => {
      expect(mountedDashboard.state('allNotes')).toEqual(mockNotes);
      expect(mountedDashboard.state('allNotes')).toHaveLength(1);
    });
  });

  test('For selectable by class .note-grid', () => {
    expect(shallow(<Dashboard />).is('.note-grid')).toBe(true);
  });

  test('Mount in DOM', () => {
    expect(mountedDashboard.find('.note-grid')).toHaveLength(1);
  });
});
